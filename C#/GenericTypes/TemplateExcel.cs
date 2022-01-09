using GenericTypes.Models;
using System;

namespace GenericTypes
{
    public static class TemplateExcel
    {
        public static void BuildTemplateOperacao(ITemplate template)
        {
            Console.WriteLine(template.NumeroContrato);
        }

        public static void BuildTemplateParcela()
        {

        }
    }
}
