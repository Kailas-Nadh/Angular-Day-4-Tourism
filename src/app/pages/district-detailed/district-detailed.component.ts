import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { District } from '../../../models/district.interface';
import { DetailedDistrict } from '../../../models/detailed_district.interface';
import { OverviewComponent } from '../overview/overview.component';

@Component({
  selector: 'app-district-detailed',
  standalone: true,
  imports: [OverviewComponent, RouterLink],
  templateUrl: './district-detailed.component.html',
  styleUrl: './district-detailed.component.scss',
})
export class DistrictDetailedComponent {
  itemId: number | null = null;
  district: District | null = null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.itemId = id ? +id : null;
      if (this.itemId) {
        this.fetchDetails(this.itemId);
      }
    });
  }
  async fetchDetails(id: number) {
    try {
      const response = await fetch(
        'https://92fba6d69ddc4ae38d0736ae53b1ab8a.api.mockbin.io/'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);
      const filteredDistrict = data.districts.find(
        (district: { id: number }) => district.id === id
      );
      console.log(filteredDistrict);
      this.district = filteredDistrict;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
