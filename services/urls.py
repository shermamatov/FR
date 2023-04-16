from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings

api_urlpatterns = [
    path('blogs/', include('apps.blogs.urls')),
    path('photos/', include('apps.photos.urls')),
    path('reviews/', include('apps.reviews.urls')),
    path('services/', include('apps.services.urls')),
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(api_urlpatterns)),
    
    path('', TemplateView.as_view(template_name = 'index.html')),
]
urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
