using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NumericSequenceCalculator;
using NumericSequenceCalculator.Controllers;
using System.Web.Mvc;
using System.Collections.Generic;

namespace NumericSequenceCalculator.Tests
{
	[TestClass]
	public class HomeControllerTests
	{
            HomeController controller = new HomeController();
        	[TestMethod]
            public void IndexActionReturnsIndexView()
        	{
                
                var result = controller.Index() as ViewResult;
                Assert.AreEqual("Index",result.ViewName);
        	}

            [TestMethod]
            public void AllNumbers_Action_ReturningAll_Required_Numbers()
            {
                JsonResult actual = controller.AllNumbers(2) as JsonResult;

                List<int> result = actual.Data as List<int>;

                Assert.AreEqual(3, result.Count);
                Assert.AreEqual(0, result[0]);
                Assert.AreEqual(1, result[1]);
                Assert.AreEqual(2, result[2]);

            }
            [TestMethod]
            public void fibonocciNumbers_ActionResult_Test()
            {
                JsonResult actual = controller.FibonocciNumbers(12) as JsonResult;
                List<int> result = actual.Data as List<int>;
                Assert.AreEqual(5, result.Count);
            }
            [TestMethod]
            public void CustomNumbers_ActionResult_Test()
            {
               var actual = controller.CustomNumbers(15) as JsonResult;  
            
                Assert.IsNotNull(actual);

                List<string> result = actual.Data as List<string>;
                Assert.IsNotNull(result);
                Assert.AreEqual(15,result.Count );
                Assert.AreEqual("C", result[2]);
                Assert.AreEqual("E", result[4]);
                Assert.AreEqual("Z", result[14]);

            }
	}
}
