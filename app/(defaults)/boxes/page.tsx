'use client';
import Dropdown from '@/components/dropdown';
import IconCaretsDown from '@/components/icon/icon-carets-down';
import IconChatDots from '@/components/icon/icon-chat-dots';
import IconChecks from '@/components/icon/icon-checks';
import IconChrome from '@/components/icon/icon-chrome';
import IconClock from '@/components/icon/icon-clock';
import IconCreditCard from '@/components/icon/icon-credit-card';
import IconFile from '@/components/icon/icon-file';
import IconGlobe from '@/components/icon/icon-globe';
import IconHorizontalDots from '@/components/icon/icon-horizontal-dots';
import IconLink from '@/components/icon/icon-link';
import IconMail from '@/components/icon/icon-mail';
import IconPlus from '@/components/icon/icon-plus';
import IconSafari from '@/components/icon/icon-safari';
import IconServer from '@/components/icon/icon-server';
import IconSquareCheck from '@/components/icon/icon-square-check';
import IconThumbUp from '@/components/icon/icon-thumb-up';
import IconTrendingUp from '@/components/icon/icon-trending-up';
import IconUsersGroup from '@/components/icon/icon-users-group';
import { IRootState } from '@/store';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import IconPencil from '@/components/icon/icon-pencil';
import IconSettings from '@/components/icon/icon-settings';
import IconTrashLines from '@/components/icon/icon-trash-lines';
import Tippy from '@tippyjs/react';

const ComponentsDashboardAnalytics = () => {
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // totalVisitOptions
    const totalVisit: any = {
        series: [{ data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25] }],
        options: {
            chart: {
                height: 58,
                type: 'line',
                fontFamily: 'inter, sans-serif',
                sparkline: {
                    enabled: true,
                },
                dropShadow: {
                    enabled: true,
                    blur: 3,
                    color: '#009688',
                    opacity: 0.4,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#009688'],
            grid: {
                padding: {
                    top: 5,
                    bottom: 5,
                    left: 5,
                    right: 5,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // paidVisitOptions
    const paidVisit: any = {
        series: [{ data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69] }],
        options: {
            chart: {
                height: 58,
                type: 'line',
                fontFamily: 'inter, sans-serif',
                sparkline: {
                    enabled: true,
                },
                dropShadow: {
                    enabled: true,
                    blur: 3,
                    color: '#e2a03f',
                    opacity: 0.4,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#e2a03f'],
            grid: {
                padding: {
                    top: 5,
                    bottom: 5,
                    left: 5,
                    right: 5,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // uniqueVisitorSeriesOptions
    const uniqueVisitorSeries: any = {
        series: [
            {
                name: 'Direct',
                data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63],
            },
            {
                name: 'Organic',
                data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70],
            },
        ],
        options: {
            chart: {
                height: 360,
                type: 'bar',
                fontFamily: 'inter, sans-serif',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 2,
                colors: ['transparent'],
            },
            colors: ['#5c1ac3', '#ffbb44'],
            dropShadow: {
                enabled: true,
                blur: 3,
                color: '#515365',
                opacity: 0.4,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    borderRadius: 8,
                    borderRadiusApplication: 'end',
                },
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '14px',
                itemMargin: {
                    horizontal: 8,
                    vertical: 8,
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
                padding: {
                    left: 20,
                    right: 20,
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisBorder: {
                    show: true,
                    color: isDark ? '#3b3f5c' : '#e0e6ed',
                },
            },
            yaxis: {
                tickAmount: 6,
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -10 : 0,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: isDark ? 'dark' : 'light',
                    type: 'vertical',
                    shadeIntensity: 0.3,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0.8,
                    stops: [0, 100],
                },
            },
            tooltip: {
                marker: {
                    show: true,
                },
            },
        },
    };
    // followersOptions
    const followers: any = {
        series: [
            {
                data: [38, 60, 38, 52, 36, 40, 28],
            },
        ],
        options: {
            chart: {
                height: 160,
                type: 'area',
                fontFamily: 'inter, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#E3000F'],
            grid: {
                padding: {
                    top: 5,
                },
            },
            yaxis: {
                show: false,
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // referralOptions
    const referral: any = {
        series: [
            {
                data: [60, 28, 52, 38, 40, 36, 38],
            },
        ],
        options: {
            chart: {
                height: 160,
                type: 'area',
                fontFamily: 'inter, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#e7515a'],
            grid: {
                padding: {
                    top: 5,
                },
            },
            yaxis: {
                show: false,
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // engagementOptions
    const engagement: any = {
        series: [
            {
                name: 'Sales',
                data: [28, 50, 36, 60, 38, 52, 38],
            },
        ],
        options: {
            chart: {
                height: 160,
                type: 'area',
                fontFamily: 'inter, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#1abc9c'],
            grid: {
                padding: {
                    top: 5,
                },
            },
            yaxis: {
                show: false,
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl">Boxes</h2>
            </div>
            <div className="pt-5">
                <div className="panel h-full">
                    <div className="-m-5 mb-5 flex items-center justify-between border-b border-white-light p-5 dark:border-[#1b2e4b]">
                        <button type="button" className="flex font-semibold">
                            <div style={{ textAlign: 'left' }}>
                                <h6>Box Name: Gloves</h6>
                                <p className="mt-1 text-xs text-white-dark">Location of box: Aisle: 23, Shelf: 06</p>
                            </div>
                        </button>

                        <div>
                            <ul className="flex items-center justify-center gap-2">
                                <li>
                                    <Tippy content="">
                                        <button type="button">
                                            <IconSettings className="h-5 w-5 text-primary" />
                                        </button>
                                    </Tippy>
                                </li>
                                <li>
                                    <Tippy content="">
                                        <button type="button">
                                            <IconPencil className="text-success" />
                                        </button>
                                    </Tippy>
                                </li>
                                <li>
                                    <Tippy content="">
                                        <button type="button">
                                            <IconTrashLines className="text-danger" />
                                        </button>
                                    </Tippy>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="group">
                        <div className="mb-2 flex-col items-center justify-center">
                            <div className="mb-4">
                                <h1>Compartment 1</h1>
                            </div>
                            <div className="flex-wrap gap-2">
                                <div className="w-full max-w-[30rem] rounded border border-white-light bg-white dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                                    <div className="relative flex items-start p-3">
                                        {/* Image on the left */}
                                        <div className="mb-5 mr-4 h-20 w-20 overflow-hidden rounded border sm:mb-0">
                                            <img src="/assets/images/gloves.png" alt="profile" className="h-full w-full object-cover" />
                                        </div>

                                        {/* Content on the right */}
                                        <div className="flex flex-grow flex-col">
                                            {' '}
                                            <h5 className="mb-1 text-[15px] font-semibold text-[#3b3f5c] dark:text-white-light">Medical Gloves</h5>
                                            <p className="mb-3 text-white-dark">Metasys</p>
                                            <div className="gap-2">
                                                {' '}
                                                <button className="rounded-md bg-red-500 px-2 py-1 text-xs font-medium text-white">Sensor 1</button>
                                                <button className="rounded-md bg-green-700 px-2 py-1 text-xs font-medium text-white">Calibrated</button>
                                            </div>
                                            <div className="absolute bottom-3 right-3">
                                                <Tippy content="">
                                                    <button type="button">
                                                        <IconPencil className="text-green-700" />
                                                    </button>
                                                </Tippy>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-3 mb-2 flex items-center justify-between font-semibold">
                                        <div className="flex items-center">
                                            <IconSquareCheck className="h-4 w-4 text-success" />
                                            <div className="text-xs ltr:ml-2 rtl:mr-2">30/50</div>
                                        </div>
                                        <p className="text-primary">65%</p>
                                    </div>
                                    <div className="mx-3 mb-3 h-2.5 rounded-full bg-dark-light p-0.5 dark:bg-dark-light/10">
                                        <div className="h-full rounded-full bg-gradient-to-r from-[#ff6060] to-[#f795a2]" style={{ width: '65%' }}></div>
                                    </div>
                                </div>
                                <div className="w-full max-w-[30rem] rounded border border-white-light bg-white dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                                    <div className="relative flex items-start p-3">
                                        {/* Image on the left */}
                                        <div className="mb-5 mr-4 h-20 w-20 overflow-hidden rounded border sm:mb-0">
                                            <img src="/assets/images/gloves.png" alt="profile" className="h-full w-full object-cover" />
                                        </div>

                                        {/* Content on the right */}
                                        <div className="flex flex-grow flex-col">
                                            {' '}
                                            <h5 className="mb-1 text-[15px] font-semibold text-[#3b3f5c] dark:text-white-light">Medical Gloves</h5>
                                            <p className="mb-3 text-white-dark">Metasys</p>
                                            <div className="gap-2">
                                                {' '}
                                                <button className="rounded-md bg-red-500 px-2 py-1 text-xs font-medium text-white">Sensor 1</button>
                                                <button className="rounded-md bg-green-700 px-2 py-1 text-xs font-medium text-white">Calibrated</button>
                                            </div>
                                            <div className="absolute bottom-3 right-3">
                                                <Tippy content="">
                                                    <button type="button">
                                                        <IconPencil className="text-green-700" />
                                                    </button>
                                                </Tippy>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-3 mb-2 flex items-center justify-between font-semibold">
                                        <div className="flex items-center">
                                            <IconSquareCheck className="h-4 w-4 text-success" />
                                            <div className="text-xs ltr:ml-2 rtl:mr-2">30/50</div>
                                        </div>
                                        <p className="text-primary">65%</p>
                                    </div>
                                    <div className="mx-3 mb-3 h-2.5 rounded-full bg-dark-light p-0.5 dark:bg-dark-light/10">
                                        <div className="h-full rounded-full bg-gradient-to-r from-[#ff6060] to-[#f795a2]" style={{ width: '65%' }}></div>
                                    </div>
                                </div>
                                <div className="w-full max-w-[30rem] rounded border border-white-light bg-white dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                                    <div className="relative flex items-start p-3">
                                        {/* Image on the left */}
                                        <div className="mb-5 mr-4 h-20 w-20 overflow-hidden rounded border sm:mb-0">
                                            <img src="/assets/images/gloves.png" alt="profile" className="h-full w-full object-cover" />
                                        </div>

                                        {/* Content on the right */}
                                        <div className="flex flex-grow flex-col">
                                            {' '}
                                            <h5 className="mb-1 text-[15px] font-semibold text-[#3b3f5c] dark:text-white-light">Medical Gloves</h5>
                                            <p className="mb-3 text-white-dark">Metasys</p>
                                            <div className="gap-2">
                                                {' '}
                                                <button className="rounded-md bg-red-500 px-2 py-1 text-xs font-medium text-white">Sensor 1</button>
                                                <button className="rounded-md bg-green-700 px-2 py-1 text-xs font-medium text-white">Calibrated</button>
                                            </div>
                                            <div className="absolute bottom-3 right-3">
                                                <Tippy content="">
                                                    <button type="button">
                                                        <IconPencil className="text-green-700" />
                                                    </button>
                                                </Tippy>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-3 mb-2 flex items-center justify-between font-semibold">
                                        <div className="flex items-center">
                                            <IconSquareCheck className="h-4 w-4 text-success" />
                                            <div className="text-xs ltr:ml-2 rtl:mr-2">30/50</div>
                                        </div>
                                        <p className="text-primary">65%</p>
                                    </div>
                                    <div className="mx-3 mb-3 h-2.5 rounded-full bg-dark-light p-0.5 dark:bg-dark-light/10">
                                        <div className="h-full rounded-full bg-gradient-to-r from-[#ff6060] to-[#f795a2]" style={{ width: '65%' }}></div>
                                    </div>
                                </div>
                                <div className="w-full max-w-[30rem] rounded border border-white-light bg-white dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                                    <div className="relative flex items-start p-3">
                                        {/* Image on the left */}
                                        <div className="mb-5 mr-4 h-20 w-20 overflow-hidden rounded border sm:mb-0">
                                            <img src="/assets/images/gloves.png" alt="profile" className="h-full w-full object-cover" />
                                        </div>

                                        {/* Content on the right */}
                                        <div className="flex flex-grow flex-col">
                                            {' '}
                                            <h5 className="mb-1 text-[15px] font-semibold text-[#3b3f5c] dark:text-white-light">Medical Gloves</h5>
                                            <p className="mb-3 text-white-dark">Metasys</p>
                                            <div className="gap-2">
                                                {' '}
                                                <button className="rounded-md bg-red-500 px-2 py-1 text-xs font-medium text-white">Sensor 1</button>
                                                <button className="rounded-md bg-green-700 px-2 py-1 text-xs font-medium text-white">Calibrated</button>
                                            </div>
                                            <div className="absolute bottom-3 right-3">
                                                <Tippy content="">
                                                    <button type="button">
                                                        <IconPencil className="text-green-700" />
                                                    </button>
                                                </Tippy>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-3 mb-2 flex items-center justify-between font-semibold">
                                        <div className="flex items-center">
                                            <IconSquareCheck className="h-4 w-4 text-success" />
                                            <div className="text-xs ltr:ml-2 rtl:mr-2">30/50</div>
                                        </div>
                                        <p className="text-primary">65%</p>
                                    </div>
                                    <div className="mx-3 mb-3 h-2.5 rounded-full bg-dark-light p-0.5 dark:bg-dark-light/10">
                                        <div className="h-full rounded-full bg-gradient-to-r from-[#ff6060] to-[#f795a2]" style={{ width: '65%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5 text-white-dark">Doloribus nisi vel suscipit modi, optio ex repudiandae voluptatibus officiis commodi. Nesciunt quas aut neque incidunt!</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComponentsDashboardAnalytics;
