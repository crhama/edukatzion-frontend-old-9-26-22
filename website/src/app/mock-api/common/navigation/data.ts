/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'organizations',
        title   : 'organizations',
        subtitle: 'Organization Structure',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'organizations.classrooms',
                title: 'Class Rooms',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/organizations/classrooms'
            }
        ]
    },
    {
        id      : 'students',
        title   : 'students',
        subtitle: 'Student Management',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'students.list',
                title: 'List',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/students/management/list'
            }
        ]
    },
    {
        id      : 'courses',
        title   : 'courses',
        subtitle: 'Course Management',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'courses.list',
                title: 'List',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/courses/management/list'
            }
        ]
    },
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
