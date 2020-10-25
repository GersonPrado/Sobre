using System.Collections;
using System;

namespace app_logging.Models
{
    public interface InterfaceLogModel
    {
        public string NameController{get; set;}
        public string NameAction{get; set;}
        public IEnumerable ListArguments {get; set;}
        public string NameArea {get; set;}
        public DateTime DateProcess {get; set;}
    }
}
