using Microsoft.AspNetCore.Mvc;

namespace vanilla_angular.Controllers
{
    [Route("api/[controller]")]
    public class CompanyController : Controller
    {
        private const string COMPANY_NAME = "Foo Bar Industries Ltd";

        [HttpGet("[action]")]
        public JsonResult CompanyName() {
            return new JsonResult(COMPANY_NAME);
        }
    }
}