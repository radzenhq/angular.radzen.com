import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ButtonComponent } from './button/button.component';
import { SplitButtonComponent } from './split-button/split-button.component';
import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';
import { LinkComponent } from './link/link.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { GravatarComponent } from './gravatar/gravatar.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CardComponent } from './card/card.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { PanelComponent } from './panel/panel.component';
import { StepsComponent } from './steps/steps.component';
import { TabsComponent } from './tabs/tabs.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { CheckBoxListComponent } from './check-box-list/check-box-list.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { DropDownDataGridComponent } from './drop-down-data-grid/drop-down-data-grid.component';
import { FileInputComponent } from './file-input/file-input.component';
import { FormComponent } from './form/form.component';
import { LabelComponent } from './label/label.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { MaskComponent } from './mask/mask.component';
import { NumericComponent } from './numeric/numeric.component';
import { PasswordComponent } from './password/password.component';
import { RadioButtonListComponent } from './radio-button-list/radio-button-list.component';
import { RatingComponent } from './rating/rating.component';
import { SelectBarComponent } from './select-bar/select-bar.component';
import { SliderComponent } from './slider/slider.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { DataListComponent } from './data-list/data-list.component';
import { PickListComponent } from './pick-list/pick-list.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { TreeComponent } from './tree/tree.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { SparklineComponent } from './sparkline/sparkline.component';
import { GaugeComponent } from './gauge/gauge.component';
import { PageWithParameterComponent } from './page-with-parameter/page-with-parameter.component';

export const routes: Routes = [
  { path: '', redirectTo: '/button', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'button',
        component: ButtonComponent
      },
      {
        path: 'split-button',
        component: SplitButtonComponent
      },
      {
        path: 'icon',
        component: IconComponent
      },
      {
        path: 'image',
        component: ImageComponent
      },
      {
        path: 'link',
        component: LinkComponent
      },
      {
        path: 'progress-bar',
        component: ProgressBarComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'upload',
        component: UploadComponent
      },
      {
        path: 'gravatar',
        component: GravatarComponent
      },
      {
        path: 'google-map',
        component: GoogleMapComponent
      },
      {
        path: 'accordion',
        component: AccordionComponent
      },
      {
        path: 'card',
        component: CardComponent
      },
      {
        path: 'fieldset',
        component: FieldsetComponent
      },
      {
        path: 'panel',
        component: PanelComponent
      },
      {
        path: 'steps',
        component: StepsComponent
      },
      {
        path: 'tabs',
        component: TabsComponent
      },
      {
        path: 'auto-complete',
        component: AutoCompleteComponent
      },
      {
        path: 'check-box',
        component: CheckBoxComponent
      },
      {
        path: 'check-box-list',
        component: CheckBoxListComponent
      },
      {
        path: 'date-picker',
        component: DatePickerComponent
      },
      {
        path: 'drop-down',
        component: DropDownComponent
      },
      {
        path: 'drop-down-data-grid',
        component: DropDownDataGridComponent
      },
      {
        path: 'file-input',
        component: FileInputComponent
      },
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: 'label',
        component: LabelComponent
      },
      {
        path: 'list-box',
        component: ListBoxComponent
      },
      {
        path: 'mask',
        component: MaskComponent
      },
      {
        path: 'numeric',
        component: NumericComponent
      },
      {
        path: 'password',
        component: PasswordComponent
      },
      {
        path: 'radio-button-list',
        component: RadioButtonListComponent
      },
      {
        path: 'rating',
        component: RatingComponent
      },
      {
        path: 'select-bar',
        component: SelectBarComponent
      },
      {
        path: 'slider',
        component: SliderComponent
      },
      {
        path: 'template-form',
        component: TemplateFormComponent
      },
      {
        path: 'text-area',
        component: TextAreaComponent
      },
      {
        path: 'text-box',
        component: TextBoxComponent
      },
      {
        path: 'data-grid',
        component: DataGridComponent
      },
      {
        path: 'data-list',
        component: DataListComponent
      },
      {
        path: 'pick-list',
        component: PickListComponent
      },
      {
        path: 'scheduler',
        component: SchedulerComponent
      },
      {
        path: 'tree',
        component: TreeComponent
      },
      {
        path: 'tree-grid',
        component: TreeGridComponent
      },
      {
        path: 'area-chart',
        component: AreaChartComponent
      },
      {
        path: 'bar-chart',
        component: BarChartComponent
      },
      {
        path: 'donut-chart',
        component: DonutChartComponent
      },
      {
        path: 'line-chart',
        component: LineChartComponent
      },
      {
        path: 'pie-chart',
        component: PieChartComponent
      },
      {
        path: 'sparkline',
        component: SparklineComponent
      },
      {
        path: 'gauge',
        component: GaugeComponent
      },
      {
        path: 'page-with-parameter/:MyParameter',
        component: PageWithParameterComponent
      },
    ]
  },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
