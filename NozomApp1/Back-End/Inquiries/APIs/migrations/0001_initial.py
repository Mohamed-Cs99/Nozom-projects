# Generated by Django 5.0.1 on 2024-01-21 19:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Approval',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('committe_type', models.CharField(max_length=255)),
                ('hospital_name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('renk', models.CharField(max_length=255)),
                ('approval_type', models.CharField(max_length=255)),
                ('diagnosis', models.TextField()),
                ('approval_date', models.DateField()),
                ('additional_note', models.TextField()),
                ('approval', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='APIs.approval')),
            ],
        ),
    ]
