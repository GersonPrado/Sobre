using GenericTypes.Models;

namespace GenericTypes.Excel
{
    public class TemplateExcelHelper
    {
        public ITemplate templateExcel { get; set; }
        public void BuildTemplate()
        {
            TemplateExcel.BuildTemplateOperacao(templateExcel);
        }
    }
}
