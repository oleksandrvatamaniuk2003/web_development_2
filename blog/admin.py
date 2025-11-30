from django.contrib import admin
from .models import Article, Comment

class CommentInline(admin.TabularInline):
    model = Comment
    extra = 1

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    inlines = [CommentInline]
    list_display = ('title', 'author', 'published_date')