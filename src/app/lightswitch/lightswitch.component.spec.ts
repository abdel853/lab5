import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LightswitchComponent } from './lightswitch.component';

describe('LightswitchComp', ()=> {

  let component: LightswitchComponent;
  let fixture: ComponentFixture<LightswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightswitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clicked() should toggle #isOn', () => {
        
    expect(component.isOn)
      .withContext('off at first')
      .toBe(false);

    component.clicked();
    expect(component.isOn)
      .withContext('on after click')
      .toBe(true);
    
    component.clicked();
    expect(component.isOn)
      .withContext('off after second click')
      .toBe(false);
  
  });

  it('#clicked() should set #message to "is on"', ()=>{
    expect(component.message)
      .withContext('off at first')
      .toMatch(/is off/i);

    component.clicked();
    expect(component.message)
      .withContext('on after clicked')
      .toMatch(/is on/i);
    
  });


  it('#switch() should change text color', () => {
        
    expect(component.color)
      .withContext('black at first')
      .toBe(true);

    component.blackColor();
    expect(component.color)
      .withContext('white after switch')
      .toBe(false);
    
    component.blackColor();
    expect(component.color)
      .withContext('black second black after second switch')
      .toBe(true);
  
  });

  it('#switch() should change text color', () => {
        
    expect(component.color)
      .withContext('black at first')
      .toBe(true);

    component.blackColor();
    expect(component.color)
      .withContext('white after switch')
      .toBe(false);
    
    component.blackColor();
    expect(component.color)
      .withContext('black second black after second switch')
      .toBe(true);
  
  });

  it('#chage should change the background color', () => {
        
    expect(component.background)
      .withContext('white at first')
      .toBe(true);

    component.blackColor();
    expect(component.background)
      .withContext('black after change')
      .toBe(false);
    
    component.blackColor();
    expect(component.color)
      .withContext('white after second switch')
      .toBe(true);
  
  });

});