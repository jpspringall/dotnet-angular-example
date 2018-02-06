using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.Serialization.Json;

namespace vanilla_angular.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController
    {
        // private static List<Customer> CUSTOMER_LIST = new List<Customer>
        // {
        //     new Customer(0, "Willy Wonker", 23.50m)
        //     , new Customer(1, "Dolores O'Riordan", 1211.10m)
        //     , new Customer(2, "Taliavar Ahmed", 33925.95m)
        //     , new Customer(3, "Raja Pochanapeddi", 99.00m)
        //     , new Customer(4, "Peter Rabbit", 44.50m)
        // };

        private static string DataFilePath = string.Format("{0}{1}{2}", System.AppDomain.CurrentDomain.BaseDirectory, "..\\..\\..\\App_Data\\", "db.json");

        [HttpGet]
        public JsonResult ListCustomers()
        {
            return new JsonResult(LoadCustomers());
        }

        [HttpPost]
        [HttpPut]
        public IActionResult SaveCustomer([FromBody] Customer customer)
        {
            if (customer == null || customer.Name == null)
            {
                return new BadRequestResult();
            }

            var customersList = LoadCustomers();

            if (customer.Id.HasValue)
            {
                var item = customersList.FirstOrDefault(f => f.Id.Value == customer.Id.Value);
                var index = customersList.IndexOf(item);
                if (index < 0)
                {
                    return new BadRequestResult();
                }
                else
                {
                    customersList[index] = customer;
                }
            }
            else
            {
                Customer created = new Customer(customersList.Count, customer.Name, customer.AccountBalance);
                customersList.Add(created);
            }
            SaveCustomers(customersList);
            return new OkResult();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCustomer(int? id)
        {
            if (id.HasValue)
            {
                var customersList = LoadCustomers();
                var item = customersList.First(f => f.Id.Value == id.Value);
                var index = customersList.IndexOf(item);
                if (index < 0)
                {
                    return new BadRequestResult();
                }
                else
                {
                    customersList.RemoveAt(index);
                    SaveCustomers(customersList);
                }
            }
            else
            {
                return new BadRequestResult();
            }
            return new OkResult();
        }

        private static List<Customer> LoadCustomers()
        {
            var returnValue = new List<Customer>();
            using (var fs = new System.IO.FileStream(DataFilePath, System.IO.FileMode.Open))
            {
                DataContractJsonSerializer ser = new DataContractJsonSerializer(returnValue.GetType());
                returnValue = ser.ReadObject(fs) as List<Customer>;
            }
            return returnValue;
        }

        private static void SaveCustomers(List<Customer> customers)
        {

            using (var fs = new System.IO.FileStream(DataFilePath, System.IO.FileMode.Create))
            {
                DataContractJsonSerializer ser = new DataContractJsonSerializer(typeof(List<Customer>));
                ser.WriteObject(fs, customers);
            }
        }
    }

    [System.Runtime.Serialization.DataContract]
    public class Customer
    {
        [System.Runtime.Serialization.DataMember]
        public int? Id { get; set; }
        [System.Runtime.Serialization.DataMember]
        public string Name { get; set; }
        [System.Runtime.Serialization.DataMember]
        public decimal AccountBalance { get; set; }
        public Customer(int? id, string name, decimal accountBalance)
        {
            this.Id = id;
            this.Name = name;
            this.AccountBalance = accountBalance;
        }
    }
}