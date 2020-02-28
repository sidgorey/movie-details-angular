import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'

import { MovieCardComponent } from './movie-card.component';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      declarations: [ MovieCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to determine a null, empty string or undefined or not a number.', ()=>{
    expect(component.isValidNumber(null)).toEqual(false);
    expect(component.isValidNumber(undefined)).toEqual(false);
    expect(component.isValidNumber('')).toEqual(false);
    expect(component.isValidNumber('name1')).toEqual(false);
    expect(component.isValidNumber('abscdbd')).toEqual(false);

  });

  it('should be able to determine numbers in the form of strings as a valid number.',() => {
    expect(component.isValidNumber('0')).toBeTrue();
    expect(component.isValidNumber('-1')).toBeTrue();
    expect(component.isValidNumber('-12345')).toBeTrue();
    expect(component.isValidNumber('12312')).toBeTrue();
    expect(component.isValidNumber('123456789')).toBeTrue();

  });
});
