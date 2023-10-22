using System.ComponentModel.DataAnnotations;

namespace EmployeeAPI.Models
{
    public class Employee
    {
        [Key]
        private Guid Id;
        private string Name {  get; set; }
        private string Email { get; set; }
        private long Phone { get; set; }
        private long salary { get; set; }
        private string Department { get; set; }

    }
}
