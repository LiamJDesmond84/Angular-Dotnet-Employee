using Microsoft.AspNetCore.Mvc;

namespace EmployeeAPI.Controllers
{
    public class EmployeesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
