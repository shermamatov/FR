from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name = 'index.html')),
    path('services/', TemplateView.as_view(template_name = 'index.html')),
    path('services/<int:id>/', TemplateView.as_view(template_name = 'index.html')),
    path('privacy_policy/', TemplateView.as_view(template_name = 'index.html')),
    path('book_now/', TemplateView.as_view(template_name = 'index.html')),
    path('reviews/', TemplateView.as_view(template_name = 'index.html')),
    path('photos/', TemplateView.as_view(template_name = 'index.html')),
    path('blog/', TemplateView.as_view(template_name = 'index.html')),
    path('location/', TemplateView.as_view(template_name = 'index.html')),
]
urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
