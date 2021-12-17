# Generated by Django 3.2.8 on 2021-11-26 01:03

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('flights', '0002_passenger'),
    ]

    operations = [
        migrations.AddField(
            model_name='passenger',
            name='flights',
            field=models.ManyToManyField(blank=True, related_name='passenger', to='flights.Flight'),
        ),
        migrations.RemoveField(
            model_name='passenger',
            name='last_name',
        ),
        migrations.AddField(
            model_name='passenger',
            name='last_name',
            field=models.CharField(default=django.utils.timezone.now, max_length=64),
            preserve_default=False,
        ),
    ]
