import { DetailsService } from './details.service';
import { TestBed } from '@angular/core/testing';



describe('AllDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailsService = TestBed.get(DetailsService);
    expect(service).toBeTruthy();
  });
});
