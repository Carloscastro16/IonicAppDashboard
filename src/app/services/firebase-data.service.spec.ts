import { TestBed } from '@angular/core/testing';

import { FirebaseDataService } from './firebase-data.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

describe('FirebaseDataService', () => {
  let service: FirebaseDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
