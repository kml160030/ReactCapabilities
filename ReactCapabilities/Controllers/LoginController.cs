using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactCapabilities.Models;

namespace ReactCapabilities.Controllers
{
    [ApiController]
    [Route("/login")]
    public class LoginController : Controller
    {
        [HttpGet]
        public string Login(string username, string password)
        {
            UserModel user = new UserModel();
            user.Username = "username";
            user.Password = "password";
            if(username.Equals(user.Username) && password.Equals(user.Password))
            {
                Console.WriteLine("Something is in username variable");
                Console.WriteLine("username: " + username);
                Console.WriteLine("password: " + password);

                return "Authorized";
            }
            return "Not Authorized";
        }
    }
}
