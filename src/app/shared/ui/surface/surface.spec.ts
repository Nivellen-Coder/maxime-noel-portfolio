import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SurfaceComponent } from './surface';

@Component({
  standalone: true,
  imports: [SurfaceComponent],
  template: `
    <nds-surface
      [variant]="variant"
      [padding]="padding"
      [radius]="radius"
      [border]="border"
      [glow]="glow"
      [interactive]="interactive">

      <span class="projected-content">
        Nova Design System
      </span>

    </nds-surface>
  `
})
class TestHostComponent {
  variant = 'glass';
  padding = 'lg';
  radius = 'xl';

  border = true;
  glow = false;
  interactive = false;
}

describe('SurfaceComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  function getSurface(): HTMLElement {
    return fixture.debugElement.query(
      By.directive(SurfaceComponent)
    ).nativeElement;
  }

  it('should create the component', () => {
    expect(getSurface()).toBeTruthy();
  });

  it('should project content', () => {
    const content = getSurface().querySelector('.projected-content');

    expect(content).not.toBeNull();
    expect(content?.textContent?.trim()).toBe('Nova Design System');
  });

  it('should apply the selected variant', () => {
    fixture.componentInstance.variant = 'outlined';
    fixture.detectChanges();

    expect(getSurface().getAttribute('data-variant')).toBe('outlined');
  });

  it('should apply the selected padding', () => {
    fixture.componentInstance.padding = 'sm';
    fixture.detectChanges();

    expect(getSurface().getAttribute('data-padding')).toBe('sm');
  });

  it('should apply the selected radius', () => {
    fixture.componentInstance.radius = 'full';
    fixture.detectChanges();

    expect(getSurface().getAttribute('data-radius')).toBe('full');
  });

  it('should toggle border class', () => {
    fixture.componentInstance.border = false;
    fixture.detectChanges();

    expect(getSurface().classList.contains('nds-surface--border')).toBe(false);

    fixture.componentInstance.border = true;
    fixture.detectChanges();

    expect(getSurface().classList.contains('nds-surface--border')).toBe(true);
  });

  it('should toggle glow class', () => {
    fixture.componentInstance.glow = true;
    fixture.detectChanges();

    expect(getSurface().classList.contains('nds-surface--glow')).toBe(true);
  });

  it('should toggle interactive class', () => {
    fixture.componentInstance.interactive = true;
    fixture.detectChanges();

    expect(getSurface().classList.contains('nds-surface--interactive')).toBe(true);
  });

  it('should update attributes when inputs change', () => {
    fixture.componentInstance.variant = 'ghost';
    fixture.componentInstance.padding = 'xs';
    fixture.componentInstance.radius = 'md';

    fixture.detectChanges();

    const surface = getSurface();

    expect(surface.getAttribute('data-variant')).toBe('ghost');
    expect(surface.getAttribute('data-padding')).toBe('xs');
    expect(surface.getAttribute('data-radius')).toBe('md');
  });
});
