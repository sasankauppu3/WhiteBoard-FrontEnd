import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseGridComponentComponent } from './course-grid-component/course-grid-component.component';
import { ModuleListComponentComponent } from './module-list-component/module-list-component.component';
import { LessonTabsComponentComponent } from './lesson-tabs-component/lesson-tabs-component.component';
import { TopicPillsComponentComponent } from './topic-pills-component/topic-pills-component.component';
import { WidgetListComponentComponent } from './widget-list-component/widget-list-component.component';
import {CourseServiceClient} from './services/CourseServiceClient';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import {LessonServiceClient} from './services/LessonServiceClient';
import {TopicServiceClient} from './services/TopicServiceClient';
import {WidgetServiceClient} from './services/WidgetServiceClient';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { HeadingWidgetComponent } from './heading-widget/heading-widget.component';
import { ImageWidgetComponent } from './image-widget/image-widget.component';
import { LinkWidgetComponent } from './link-widget/link-widget.component';
import { ListWidgetComponent } from './list-widget/list-widget.component';
import { ParagraphWidgetComponent } from './paragraph-widget/paragraph-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponentComponent,
    ModuleListComponentComponent,
    LessonTabsComponentComponent,
    TopicPillsComponentComponent,
    WidgetListComponentComponent,
    CourseViewerComponent,
    HeadingWidgetComponent,
    ImageWidgetComponent,
    LinkWidgetComponent,
    ListWidgetComponent,
    ParagraphWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseServiceClient,
    LessonServiceClient,
    ModuleServiceClient,
    TopicServiceClient,
    WidgetServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
