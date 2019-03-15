using System;
using Microsoft.AspNetCore.Mvc;

namespace RadzenAngularComponents.Controllers
{
    public partial class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
