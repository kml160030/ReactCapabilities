namespace ReactCapabilities.Models
{
    public class GridModel
    {
        public GridModel(int id, string column1, string column2, string column3) {
            Id = id;
            Col1 = column1;
            Col2 = column2;
            Col3 = column3;
        }
        public int Id { get; set; }
        public string Col1 { get; set; }
        public string Col2 { get; set; }
        public string Col3 { get; set; }
    }
}
