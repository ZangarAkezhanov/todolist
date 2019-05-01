import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/models/person.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  constructor(private service: PersonService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

   populateForm(person: Person) {
    this.service.formData = Object.assign({}, person);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePerson(id).subscribe(res => {
        this.toastr.warning('Deleted successfully', 'EMP. Register');
        this.service.refreshList();
      });
    }
  }

}
