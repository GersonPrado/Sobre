using System;
using System.Collections;

namespace app_logging.Models
{
    public class LogModel : InterfaceLogModel
    {
        public string NameController { get ; set ; }
        public string NameAction { get ; set ; }
        public IEnumerable ListArguments { get ; set ; }
        public string NameArea { get ; set ; }
        public DateTime DateProcess { get ; set ; }

        public override string ToString()
        {
            return "Controller: " + NameController +
                   "Action: " + NameAction +
                   "Argumentos" + ListArguments.ToString() +
                   "Area:" + NameArea +
                   "Data Processamento: " + DateProcess;
        }
    }
}
