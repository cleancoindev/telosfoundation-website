export default function(){
	return [
		{
			name: 'Upstream Code Merges',
			description: 'Merge and test new EOS.IO reference software builds with Telos contracts imporvements',
			priority: 'Ongoing',
			status: 'Ongoing updates with new EOS.IO releases',
			personnel: [
				'Peter Bue',
				'Craig Branscom',
				'Ed Silva'
			]
		},
		{
			name: 'Sqrl Wallet',
			description: 'Ongoing additions to Sqrl wallet to support Telos tokens, governance features, REX, TIPFS and other improvements',
			priority: 'Ongoing',
			status: 'Updated to 1.0.3 on 2019-02-13',
			personnel: [
				'Marlon Williams'
			]
		},
		{
			name: 'Stagenet',
			description: 'Testing and managing implementations of Telos Stagenet for final testing of new code prior to mainnet deployment',
			priority: 'Ongoing',
			status: 'Ongoing',
			personnel: [
				'J.T. Buice',
				'Jesse Schulman',
				'Josep Rosich'
			]
		},
		{
			name: 'Snapshots',
			description: 'Development and execution of monthly snapshot capture and blockchain injection.',
			priority: 'Ongoing',
			status: 'New capture every 6 M blocks',
			personnel: [
				'Jessse Schulman',
				'J.T. Buice',
				'Mikel Segurola',
				'Stephanie Sunshine'
			]
		},
		{
			name: 'Arbitration Contract',
			description: 'Complete work on the smart contract that drives the on-chain arbitration management process.',
			priority: 'High',
			status: 'In testing',
			estimate: 'Q1 2019',
			personnel: [
				'Peter Bue',
				'Craig Branscom',
				'Trenton Bullock',
				'James Davis',
				'Douglas Horn'
			]
		},
		{
			name: 'Governance Portals',
			description: 'Build online portals for submitting, voting, and tracking governance functions including worker proposals, ratify/amend campaigns and arbitrator elections.',
			priority: 'High',
			status: 'In development',
			estimate: 'Q1 2019',
			personnel: [
				'Torben Anderson',
				'Brendon Ross',
				'Ignatius W',
				'James Davis'
			]
		},
		{
			name: 'TIPFS',
			description: 'Telos IPFS decentralized storage as a system resource with an economic model beneficial to both users and node operators.',
			priority: 'High',
			status: 'In development',
			estimate: 'Q2 2019',
			personnel: [
				'Stephanie Sunshine',
				'Craig Branscom',
				'John Hauge',
				'Rebecca Vogt',
				'James Davis'
			]
		},
		{
			name: 'Resource Exchange (REX)',
			description: 'Test and implement REX features on Telos testnet for assessment. Move to mainnet at BP discretion.',
			priority: 'Medium',
			status: 'Awaiting final REX implementation and developer resources',
			estimate: 'Q2 2019'
		},
		{
			name: 'Migration Tools',
			description: 'Create or accumulate tools to aid developers in migrating existing apps, tokens and users from Ethereum, EOS, Tron, other blockchains to Telos.',
			priority: 'Medium',
			status: 'Collecting tools from individual developers',
			estimate: 'Q2 2019'
		},
		{
			name: 'IBC',
			description: 'Integrate inter-blockchain system to enable value transfer across blockchains.',
			priority: 'Medium',
			status: 'Inter-blockchain node deploying on testnet',
			estimate: 'Q2 2019',
			personnel: [
				'Didier Martin - dev'
			]
		},
		{
			name: 'Multisig Transaction Construction Tool',
			description: 'Simplified creation of complex multisig transactions for EOS.IO.',
			priority: 'Medium',
			status: 'In progress',
			estimate: 'Q2 2019',
			personnel: [
				'Peter Bue'
			]
		},
		{
			name: 'TelosPy 2.0',
			description: 'Update to full python implementation for EOS.IO blockchains with error handling and key management',
			priority: 'Low',
			status: 'TBD',
			estimate: 'Q2 2019',
			personnel: [
				'Peter Bue'
			]
		},
		{
			name: 'Trail Voting update',
			description: 'Implement Trail 2.0 with proxy voting, yes/no voting for leaderboards, improved anti-washing protections.',
			priority: 'Low',
			status: 'Awating Resources',
			estimate: 'Q2/Q3 2019',
			personnel: [
				'Craig Branscom',
				'Peter Bue',
				'Douglas Horn'
			]
		},
		{
			name: 'Scripts and Bots',
			description: 'Development of various tools, bots, etc for monitoring Telos blockchain.',
			priority: 'Low',
			status: 'Ongoing/Intermittent',
			personnel: [
				'Jesse Schulman',
				'Kevin Quaintance',
				'Mikel Segurola',
				'Josep Rosich'
			]
		},
		{
			name: 'Block Explorer Enhancement',
			description: 'Update Telos Foundation block explorer to incorporate history, filtering, smart contracts, token display.',
			priority: 'Low',
			status: 'Awaiting developer resources',
			estimate: 'Q2 2019'
		},
		{
			name: 'Namespace Bidding Process Revision Q3 2019',
			description: 'Revise namespace bidding process for faster purchase of low value names',
			priority: 'Low',
			status: 'Awaiting community vote',
			estimate: 'Q3 2019'
		}
	];
}