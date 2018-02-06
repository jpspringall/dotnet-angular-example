using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace vanilla_angular.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController
    {
        private static List<Customer> CUSTOMER_LIST = new List<Customer>
        {
            new Customer(0, "Willy Wonker", 23.50m)
            , new Customer(1, "Dolores O'Riordan", 1211.10m)
            , new Customer(2, "Taliavar Ahmed", 33925.95m)
            , new Customer(3, "Raja Pochanapeddi", 99.00m)
            , new Customer(4, "Peter Rabbit", 44.50m)
        };

        [HttpGet]
        public JsonResult ListCustomers()
        {
            return new JsonResult(CUSTOMER_LIST);
        }

        [HttpPost]
        [HttpPut]
        public IActionResult SaveCustomer([FromBody] Customer customer)
        {
            if (customer == null || customer.Name == null)
            {
                return new BadRequestResult();
            }

            if (customer.Id.HasValue)
            {
                var item = CUSTOMER_LIST.FirstOrDefault(f => f.Id.Value == customer.Id.Value);
                var index = CUSTOMER_LIST.IndexOf(item);
                if (index < 0)
                {
                    return new BadRequestResult();
                }
                else
                {
                    CUSTOMER_LIST[index] = customer;
                }
            }
            else
            {
                Customer created = new Customer(CUSTOMER_LIST.Count, customer.Name, customer.AccountBalance);
                CUSTOMER_LIST.Add(created);
            }
            return new OkResult();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCustomer(int? id)
        {
            if (id.HasValue)
            {
                var item = CUSTOMER_LIST.First(f => f.Id.Value == id.Value);
                var index = CUSTOMER_LIST.IndexOf(item);
                if (index < 0)
                {
                    return new BadRequestResult();
                }
                else
                {
                    CUSTOMER_LIST.RemoveAt(index);
                }
            }
            else
            {
                return new BadRequestResult();
            }
            return new OkResult();
        }
    }

    public class Customer
    {
        public int? Id { get; }
        public string Name { get; }
        public decimal AccountBalance { get; }
        public Customer(int? id, string name, decimal accountBalance)
        {
            this.Id = id;
            this.Name = name;
            this.AccountBalance = accountBalance;
        }
    }
}