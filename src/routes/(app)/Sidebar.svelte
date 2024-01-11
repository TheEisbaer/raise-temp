<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import IconTablerSettings from 'virtual:icons/tabler/settings';
	import IconTablerListCheck from 'virtual:icons/tabler/list-check';
	import IconTablerUsersGroup from 'virtual:icons/tabler/users-group';
	import IconTablerTestPipe from 'virtual:icons/tabler/test-pipe';
	import IconTablerTrendingUp from 'virtual:icons/tabler/trending-up';
	import IconTablerCalendar from 'virtual:icons/tabler/calendar';
	import IconTablerMessage from 'virtual:icons/tabler/message';
	import IconTablerBell from 'virtual:icons/tabler/bell';
	import IconTablerReport from 'virtual:icons/tabler/report-analytics';

	type MenuItem = {
		name: string;
		href: string;
		icon: any;
		children: { name: string; href: string }[];
	};

	const menu: MenuItem[] = [
		{
			name: 'Administration',
			href: '/administration',
			icon: IconTablerSettings,
			children: [
				{
					name: 'Admin',
					href: '/admin'
				},
				{
					name: 'Setup',
					href: '/setup'
				}
			]
		},
		{
			name: 'Evaluation & Calibration',
			href: '/evaluation-calibration',
			icon: IconTablerListCheck,
			children: [
				{
					name: 'Create & Manage Evaluation',
					href: '/evaluation'
				},
				{
					name: 'Create & Manage Calibration',
					href: '/calibration'
				},
				{
					name: 'My Calibrations',
					href: '/my-calibrations'
				}
			]
		},
		{
			name: 'Training',
			href: '/training',
			icon: IconTablerUsersGroup,
			children: [
				{
					name: 'Create & Manage Training',
					href: ''
				}
			]
		},
		{
			name: 'Test',
			href: '/test',
			icon: IconTablerTestPipe,
			children: [
				{
					name: 'Create & Manage Test',
					href: ''
				},
				{
					name: 'My Tests',
					href: '/my-tests'
				}
			]
		},
		{
			name: 'Development Plan',
			href: '/development-plan',
			icon: IconTablerTrendingUp,
			children: [
				{
					name: 'Create & Manage Development Plan',
					href: ''
				},
				{
					name: 'My Development Plans',
					href: '/my-development-plans'
				}
			]
		},
		{
			name: 'Plan T&Q',
			href: '/plan-tq',
			icon: IconTablerCalendar,
			children: [
				{
					name: 'Create & Manage Plan T&Q ',
					href: ''
				}
			]
		},
		{
			name: 'Request',
			href: '/request',
			icon: IconTablerMessage,
			children: [
				{
					name: 'Create & Manage Request',
					href: ''
				}
			]
		},
		{
			name: 'Root Cause Analysis',
			href: '/root-cause-analysis',
			icon: IconTablerTrendingUp,
			children: [
				{
					name: 'Create & Manage RCA',
					href: ''
				},
				{
					name: 'My Root Cause Analysis',
					href: '/my-root-cause-analysis'
				}
			]
		},
		{
			name: 'Notifications',
			href: '/notifications',
			icon: IconTablerBell,
			children: [
				{
					name: 'Create & Manage Notifications',
					href: ''
				},
				{
					name: 'My Notifications',
					href: '/my-notifications'
				}
			]
		},
		{
			name: 'Reports',
			href: '/reports',
			icon: IconTablerReport,
			children: [
				{
					name: 'Export Raw Data',
					href: ''
				},
				{
					name: 'PBI Reports',
					href: ''
				}
			]
		}
	];
</script>

<nav class="list-nav">
	<Accordion autocollapse>
		<ul>
			{#each menu as menuItem}
				<AccordionItem>
					<svelte:fragment slot="lead">
						<svelte:component this={menuItem.icon} />
					</svelte:fragment>
					<svelte:fragment slot="summary">{menuItem.name}</svelte:fragment>
					<svelte:fragment slot="content">
						<li>
							{#each menuItem.children as menuChildrenItem}
								<a href={menuItem.href + menuChildrenItem.href}>
									<span class="flex-auto">
										{menuChildrenItem.name}
									</span>
								</a>
							{/each}
						</li>
					</svelte:fragment>
				</AccordionItem>
			{/each}
		</ul>
	</Accordion>
</nav>