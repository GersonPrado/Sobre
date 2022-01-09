using GenericTypes.Excel;
using GenericTypes.Models;
using System;

namespace GenericTypes
{
    class Program
    {
        static void Main(string[] args)
        {
            ITemplate templateExcelKG = new TemplateKG();
            templateExcelKG.NumeroContrato = "001";

            ITemplate templateExcelL5 = new TemplateL5();
            templateExcelL5.NumeroContrato = "002";

            var template = new TemplateExcelHelper();

            template.templateExcel = templateExcelKG;
            template.BuildTemplate();

            template.templateExcel = templateExcelL5;
            template.BuildTemplate();

            Console.WriteLine("Em execução");
            Console.ReadKey();
        }
    }
}
