namespace QuizBackend.Models
{
    public class Quiz
    {
        public int ID { get; set; }
        public string Title { get; set; }

        public string OwnerId { get; set; }
    }
}
