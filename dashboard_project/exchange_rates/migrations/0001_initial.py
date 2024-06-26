# Generated by Django 5.0.6 on 2024-06-16 19:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ExchangeRate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('base_currency', models.CharField(max_length=3)),
                ('target_currency', models.CharField(max_length=3)),
                ('rate', models.FloatField()),
            ],
        ),
    ]
