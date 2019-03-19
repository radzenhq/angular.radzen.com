/*
  This file is automatically generated. Any changes will be overwritten.
  Modify app.module.ts instead.
*/
import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BodyModule } from '@radzen/angular/dist/body';
import { CardModule } from '@radzen/angular/dist/card';
import { ContentContainerModule } from '@radzen/angular/dist/content-container';
import { HeaderModule } from '@radzen/angular/dist/header';
import { SidebarToggleModule } from '@radzen/angular/dist/sidebar-toggle';
import { LabelModule } from '@radzen/angular/dist/label';
import { SidebarModule } from '@radzen/angular/dist/sidebar';
import { PanelMenuModule } from '@radzen/angular/dist/panelmenu';
import { FooterModule } from '@radzen/angular/dist/footer';
import { ContentModule } from '@radzen/angular/dist/content';
import { HeadingModule } from '@radzen/angular/dist/heading';
import { LinkModule } from '@radzen/angular/dist/link';
import { ButtonModule } from '@radzen/angular/dist/button';
import { HtmlModule } from '@radzen/angular/dist/html';
import { SplitButtonModule } from '@radzen/angular/dist/splitbutton';
import { GoogleMapModule } from '@radzen/angular/dist/googlemap';
import { SharedModule } from '@radzen/angular/dist/shared';
import { NotificationModule } from '@radzen/angular/dist/notification';
import { DialogModule } from '@radzen/angular/dist/dialog';

import { ConfigService, configServiceFactory } from './config.service';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { CacheInterceptor } from './cache.interceptor';
export { AppComponent } from './app.component';
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
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';


export const PageDeclarations = [
  ButtonComponent,
  SplitButtonComponent,
  IconComponent,
  ImageComponent,
  LinkComponent,
  ProgressBarComponent,
  LoginComponent,
  UploadComponent,
  GravatarComponent,
  GoogleMapComponent,
  AccordionComponent,
  CardComponent,
  FieldsetComponent,
  PanelComponent,
  StepsComponent,
  TabsComponent,
  AutoCompleteComponent,
  CheckBoxComponent,
  CheckBoxListComponent,
  DatePickerComponent,
  DropDownComponent,
  DropDownDataGridComponent,
  FileInputComponent,
  FormComponent,
  LabelComponent,
  ListBoxComponent,
  MaskComponent,
  NumericComponent,
  PasswordComponent,
  RadioButtonListComponent,
  RatingComponent,
  SelectBarComponent,
  SliderComponent,
  TemplateFormComponent,
  TextAreaComponent,
  TextBoxComponent,
  DataGridComponent,
  DataListComponent,
  PickListComponent,
  SchedulerComponent,
  TreeComponent,
  TreeGridComponent,
  AreaChartComponent,
  BarChartComponent,
  DonutChartComponent,
  LineChartComponent,
  PieChartComponent,
  SparklineComponent,
  GaugeComponent,
];

export const LayoutDeclarations = [
  LoginLayoutComponent,
  MainLayoutComponent,
];

export const AppDeclarations = [
  ...PageDeclarations,
  ...LayoutDeclarations,
  AppComponent
];

export const AppProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CacheInterceptor,
    multi: true
  },
  ConfigService,
  {
    provide: APP_INITIALIZER,
    useFactory: configServiceFactory,
    deps: [ConfigService],
    multi: true
  }
];

export const AppImports = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  BodyModule,
  CardModule,
  ContentContainerModule,
  HeaderModule,
  SidebarToggleModule,
  LabelModule,
  SidebarModule,
  PanelMenuModule,
  FooterModule,
  ContentModule,
  HeadingModule,
  LinkModule,
  ButtonModule,
  HtmlModule,
  SplitButtonModule,
  GoogleMapModule,
  SharedModule,
  NotificationModule,
  DialogModule,
  AppRoutes
];
