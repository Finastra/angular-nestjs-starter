import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const mockRouter = {
    navigate: jest.fn(),
    events: {
      subscribe: (fn: (value: any) => void) => fn({}),
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes(
          [{ path: '', component: HomeComponent }]
        ),
      ],
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
