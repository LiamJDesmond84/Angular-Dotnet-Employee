using EmployeeAPI.Data;
using EmployeeAPI.Models;
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


        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] Employee employeeRequest)
        {
            employeeRequest.Id = Guid.NewGuid();

            await context.Employees.AddAsync(employeeRequest);
            await context.SaveChangesAsync();
            
            return Ok(employeeRequest);

            //if(result == 201)
            //{
            //    return Created(result);
            //}
            //else
            //{
            //    return BadRequest(result);
            //}
        }

        [HttpGet("{id:Guid}")]
        public async Task<IActionResult> getEmployee([FromRoute] Guid id)
        {
            var employee = await context.Employees.FirstOrDefaultAsync(x => x.Id == id);

            if(employee == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(employee);
            }
            
        }

        //[HttpPut]
        //public async Task<IActionResult> EditEmployee([FromBody] Employee employee)
        //{
        //    var employee = await context.Employees.Update(employee);
        //    await context.SaveChangesAsync();

        //    return Ok(employee);
        //}

    }
}
