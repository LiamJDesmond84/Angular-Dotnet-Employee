using EmployeeAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

        public async Task<IActionResult> getAllEmployees()
        {
            var employees = await context.Employees.ToListAsync();

            return Ok(employees);
        }
    }
}
