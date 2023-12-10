import { TestBed } from '@angular/core/testing';

import { RegisterCrudService } from './register-crud.service';

describe('RegisterCrudService', () => {
  let service: RegisterCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
