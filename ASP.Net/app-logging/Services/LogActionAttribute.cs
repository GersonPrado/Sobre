using System;
using Microsoft.AspNetCore.Mvc.Filters;
using app_logging.Models;
using Newtonsoft.Json;

namespace app_logging.Services
{
    public class LogActionAttribute : ActionFilterAttribute
    {
        private InterfaceLogModel logModel;
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);

            logModel = new LogModel();

            logModel.NameController = context.RouteData.Values.ContainsKey("Controller") ? context.RouteData.Values["Controller"].ToString() : null;

            logModel.NameAction = context.RouteData.Values.ContainsKey("Action") ? context.RouteData.Values["Action"].ToString() : null;

            logModel.NameArea = context.RouteData.Values.ContainsKey("Area") ? context.RouteData.Values["Area"].ToString() : null;

            logModel.ListArguments = context.ActionArguments.Count > 0 ? context.ActionArguments : null;

            logModel.DateProcess = DateTime.UtcNow;

            WriteLog();
        }

        private protected void WriteLog()
        {
            var resultJson = JsonConvert.SerializeObject(logModel);
        }
    }
}
