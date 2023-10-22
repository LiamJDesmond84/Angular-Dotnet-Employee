using EmployeeAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeAPI.Data
{
    public class AppDbContext: DbContext
    {

        public AppDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Employee> Employees { get; set; }

    }
}
