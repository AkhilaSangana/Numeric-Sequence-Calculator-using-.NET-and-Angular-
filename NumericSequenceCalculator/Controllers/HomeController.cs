using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NumericSequenceCalculator.Controllers
{
    public class HomeController : Controller
    {
        // Index action method is to load the Index view to show up instructions and to take input value.
        [HttpGet]
        public ActionResult Index()
        {
            return View("Index");
        }

        // All Numbers action method is responsible to generate all numbers till the number entered by user,
        // By using these numbers we can filter them to odd and even with use of angular filters. 
        [ActionName("AllNumbers"), HttpGet]
        public ActionResult AllNumbers(int maxvalue)
        {
            List<int> numbers = new List<int>();
            for (int i = 0; i <= maxvalue; i++)
            {
                numbers.Add(i);
            }
            return Json(numbers, JsonRequestBehavior.AllowGet);
        }

        // Action for Generating all Fibonocci numbers till the number entered by user.
        [ActionName("FibonocciNumbers"), HttpGet]
        public ActionResult FibonocciNumbers(int maxvalue)
        {
            List<int> fibnumbers = new List<int>();
            int a = 0, b = 1, n = maxvalue, result = 0;
            for (int i = 2; result <= n; i++)
            {
                result = a + b;
                a = b;
                b = result;
                if (result <= n)
                {
                    fibnumbers.Add(result);
                }
            }
            return Json(fibnumbers, JsonRequestBehavior.AllowGet);
        }

        // Action for Generating all custom numbers like multiples of 3 with C etc.
        [ActionName("CustomNumbers"), HttpGet]
        public ActionResult CustomNumbers(int maxvalue)
        {
            List<int> cnumbers = new List<int>();
            List<string> l2 = new List<string>();
            for (int i = 0; i <= maxvalue; i++)
            {
                cnumbers.Add(i);
                l2.Add(i.ToString());

                if (i % 3 == 0)
                {
                    l2[i] = "C";

                }
                if (i % 5 == 0)
                {

                    l2[i] = "E";

                }
                if (cnumbers[i] % 3 == 0 && cnumbers[i] % 5 == 0)
                {
                    l2[i] = "Z";

                }
            }
            l2.RemoveAt(0);
            return Json(l2, JsonRequestBehavior.AllowGet);

        }

    }
}