using Microsoft.EntityFrameworkCore;
using QuizBackend.Models;

namespace QuizBackend.Infrastructure
{
    public class QuizContext : DbContext
    {
        public QuizContext(DbContextOptions<QuizContext> options) : base(options) { }

        public DbSet<Question> Questions { get; set; }

        public DbSet<Quiz> Quiz { get; set; }

    }
}
