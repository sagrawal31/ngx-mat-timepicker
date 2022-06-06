import {ModuleWithProviders, NgModule} from "@angular/core";
import {OverlayModule} from "@angular/cdk/overlay";
import {PortalModule} from "@angular/cdk/portal";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {A11yModule} from "@angular/cdk/a11y";
// MATERIAL
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
// NGX-MAT-TIMEPICKER
// DIRECTIVES
import {NgxMatTimepickerDirective} from "./directives/ngx-mat-timepicker.directive";
import {NgxMatTimepickerToggleIconDirective} from "./directives/ngx-mat-timepicker-toggle-icon.directive";
import {NgxMatTimepickerThemeDirective} from "./directives/ngx-mat-timepicker-theme.directive";
import {NgxMatTimepickerBaseDirective} from "./directives/ngx-mat-timepicker-base.directive";
// COMPONENTS
import {NgxMatTimepickerComponent} from "./components/ngx-mat-timepicker/ngx-mat-timepicker.component";
import {NgxMatTimepickerToggleComponent} from "./components/ngx-mat-timepicker-toggle/ngx-mat-timepicker-toggle.component";
import {
    NgxMatTimepicker24HoursFaceComponent
} from "./components/ngx-mat-timepicker-24-hours-face/ngx-mat-timepicker-24-hours-face.component";
import {
    NgxMatTimepicker12HoursFaceComponent
} from "./components/ngx-mat-timepicker-12-hours-face/ngx-mat-timepicker-12-hours-face.component";
import {
    NgxMatTimepickerMinutesFaceComponent
} from "./components/ngx-mat-timepicker-minutes-face/ngx-mat-timepicker-minutes-face.component";
import {NgxMatTimepickerFaceComponent} from "./components/ngx-mat-timepicker-face/ngx-mat-timepicker-face.component";
import {NgxMatTimepickerDialComponent} from "./components/ngx-mat-timepicker-dial/ngx-mat-timepicker-dial.component";
import {
    NgxMatTimepickerDialControlComponent
} from "./components/ngx-mat-timepicker-dial-control/ngx-mat-timepicker-dial-control.component";
import {NgxMatTimepickerPeriodComponent} from "./components/ngx-mat-timepicker-period/ngx-mat-timepicker-period.component";
import {NgxMatTimepickerTimeFormatterPipe} from "./pipes/ngx-mat-timepicker-time-formatter.pipe";
import {NgxMatTimepickerMinutesFormatterPipe} from "./pipes/ngx-mat-timepicker-minutes-formatter.pipe";
import {NgxMatTimepickerAutofocusDirective} from "./directives/ngx-mat-timepicker-autofocus.directive";
import {NgxMatTimepickerFieldComponent} from "./components/ngx-mat-timepicker-field/ngx-mat-timepicker-field.component";
import {
    NgxMatTimepickerControlComponent
} from "./components/ngx-mat-timepicker-field/ngx-mat-timepicker-control/ngx-mat-timepicker-control.component";
import {NgxMatTimepickerTimeLocalizerPipe} from "./pipes/ngx-mat-timepicker-time-localizer.pipe";
import {NGX_MAT_TIMEPICKER_LOCALE} from "./tokens/ngx-mat-timepicker-time-locale.token";
import {NgxMatTimepickerParserPipe} from "./pipes/ngx-mat-timepicker-parser.pipe";
import {NgxMatTimepickerActiveHourPipe} from "./pipes/ngx-mat-timepicker-active-hour.pipe";
import {NgxMatTimepickerActiveMinutePipe} from "./pipes/ngx-mat-timepicker-active-minute.pipe";
import {
    NgxMatTimepickerContentComponent
} from "./components/ngx-mat-timepicker-content/ngx-mat-timepicker-content.component";
import {NgxMatTimepickerDialogComponent} from "./components/ngx-mat-timepicker-dialog/ngx-mat-timepicker-dialog.component";
import {NgxMatTimepickerHoursFaceDirective} from "./components/ngx-mat-timepicker-hours-face/ngx-mat-timepicker-hours-face.directive";
import {NgxMatTimepickerStandaloneComponent} from "./components/ngx-mat-timepicker-standalone/ngx-mat-timepicker-standalone.component";
import {NGX_MAT_TIMEPICKER_CONFIG} from "./tokens/ngx-mat-timepicker-config.token";


@NgModule({
    imports: [
        CommonModule,
        A11yModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatToolbarModule,
        MatIconModule,
        OverlayModule,
        PortalModule,
    ],
    exports: [
        NgxMatTimepickerComponent,
        NgxMatTimepickerToggleComponent,
        NgxMatTimepickerFieldComponent,
        NgxMatTimepickerDirective,
        NgxMatTimepickerToggleIconDirective
    ],
    declarations: [
        // Not really used, but needed to use it as abstract class
        NgxMatTimepickerBaseDirective,
        NgxMatTimepickerHoursFaceDirective,
        //
        NgxMatTimepickerActiveHourPipe,
        NgxMatTimepickerActiveMinutePipe,
        NgxMatTimepickerComponent,
        NgxMatTimepickerDialComponent,
        NgxMatTimepickerDialControlComponent,
        NgxMatTimepickerDialogComponent,
        NgxMatTimepickerDirective,
        NgxMatTimepickerFaceComponent,
        NgxMatTimepickerMinutesFaceComponent,
        NgxMatTimepickerPeriodComponent,
        NgxMatTimepickerStandaloneComponent,
        NgxMatTimepickerToggleComponent,
        NgxMatTimepicker12HoursFaceComponent,
        NgxMatTimepicker24HoursFaceComponent,
        NgxMatTimepickerToggleIconDirective,
        NgxMatTimepickerAutofocusDirective,
        NgxMatTimepickerMinutesFormatterPipe,
        NgxMatTimepickerThemeDirective,
        NgxMatTimepickerFieldComponent,
        NgxMatTimepickerControlComponent,
        NgxMatTimepickerParserPipe,
        NgxMatTimepickerContentComponent,
        NgxMatTimepickerTimeFormatterPipe,
        NgxMatTimepickerTimeLocalizerPipe
    ]
})
export class NgxMatTimepickerModule {

    static setLocale(locale: string): ModuleWithProviders<NgxMatTimepickerModule> {
        return {
            ngModule: NgxMatTimepickerModule,
            providers: [
                {provide: NGX_MAT_TIMEPICKER_LOCALE, useValue: locale},
                {provide: NGX_MAT_TIMEPICKER_CONFIG, useValue: undefined},
            ]
        };
    }
}
