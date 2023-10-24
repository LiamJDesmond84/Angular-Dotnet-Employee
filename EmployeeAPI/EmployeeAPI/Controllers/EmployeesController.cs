using EmployeeAPI.Data;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly AppDbContext context;

        public EmployeesController(AppDbContext context)
        {
            this.context = context;
        }

        [HttpGet]

        public IActionResult getAllEmployees()
        {
            
        }
    }
}
