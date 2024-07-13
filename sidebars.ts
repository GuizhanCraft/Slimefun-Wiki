import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  rootSidebar: [
    {
      type: 'doc',
      id: 'Home'
    },
    {
      type: 'category',
      label: '总览',
      collapsed: false,
      items: [
        'Slimefun-in-a-nutshell',
        'Installing-Slimefun',
        'Getting-Started',
        'Common-Issues',
        'How-to-report-bugs',
        'Expanding-the-Wiki',
        'Translating-Slimefun',
        'FAQ',
      ]
    },
    {
      type: 'category',
      label: '其他插件',
      collapsed: false,
      items: [
        'Addons',
        'Developer-Guide',
        'Protection-Plugins',
      ]
    },
    {
      type: 'category',
      label: '分类',
      collapsed: false,
      items: [
        'Weapons',
        'Items',
        'Basic-Machines',
        'Tools',
        'Resources',
        'Food',
        'Magical-Items',
        'Magical-Armor',
        'Technical-Components',
        'Miscellaneous-Items',
        'Armor',
        'Talismans',
        'Magical-Gadgets',
        'Technical-Gadgets',
        'Electric-Machines',
        'GPS',
        'Androids',
        'Cargo-Management',
        'Seasonal-Categories',
      ]
    },
    {
      type: 'link',
      label: '附属插件非官方 Wiki',
      href: 'https://slimefun-addons-wiki.guizhanss.cn/'
    },
    // hidden categories below
    {
      type: 'category',
      label: '武器',
      link: {type: 'doc', id: 'Weapons'},
      className: 'hidden',
      items: [
        'Walking-Sticks',
        'Sword-of-Beheading',
        'Blade-of-Vampires',
        'Seismic-Axe',
        'Soulbound-Weapons',
        'Bows',
      ]
    },
    {
      type: 'category',
      label: '有用的物品',
      link: {type: 'doc', id: 'Items'},
      className: 'hidden',
      items: [
        'Portable-Crafter',
        'Portable-Dustbin',
        'Medical-Supplies',
        'Backpacks',
        'Cooler',
        'Tape-Measure',
      ]
    },
    {
      type: 'category',
      label: '基础机器',
      link: {type: 'doc', id: 'Basic-Machines'},
      className: 'hidden',
      items: [
        'Enhanced-Crafting-Table',
        'Grind-Stone',
        'Armor-Forge',
        'Ore-Crusher',
        'Compressor',
        'Makeshift-Smeltery',
        'Smeltery',
        'Automatic-Ignition-Chamber',
        'Pressure-Chamber',
        'Magic-Workbench',
        'Ore-Washer',
        'Table-Saw',
        'Composter',
        'Automated-Panning-Machine',
        'Industrial-Miners',
        'Crucible',
        'Juicer',
        'Enhanced-Furnaces',
        'Block-Placer',
        'Output-Chest',
      ]
    },
    {
      type: 'category',
      label: '工具',
      link: {type: 'doc', id: 'Tools'},
      className: 'hidden',
      items: [
        'Gold-Pan',
        'Nether-Gold-Pan',
        'Grappling-Hook',
        'Smelter\'s-Pickaxe',
        'Lumber-Axe',
        'Pickaxe-of-Containment',
        'Hercules\'-Pickaxe',
        'Explosive-Pickaxe',
        'Explosive-Shovel',
        'Pickaxe-of-the-Seeker',
        'Cobalt-Pickaxe',
        'Pickaxe-of-Vein-Mining',
        'Climbing-Pick',
        'Soulbound-Tools',
      ]
    },
    {
      type: 'category',
      label: '资源',
      className: 'hidden',
      link: {type: 'doc', id: 'Resources'},
      items: [
        {
          type: 'category',
          label: '矿粉',
          link: {type: 'doc', id: 'Dusts'},
          items: [
            'Iron-Dust',
            'Gold-Dust',
            'Copper-Dust',
            'Tin-Dust',
            'Silver-Dust',
            'Aluminum-Dust',
            'Lead-Dust',
            'Zinc-Dust',
            'Magnesium-Dust',
          ],
        },
        {
          type: 'category',
          label: '锭',
          link: {type: 'doc', id: 'Ingots'},
          items: [
            'Iron-Ingot',
            'Gold-Ingot',
            'Copper-Ingot',
            'Tin-Ingot',
            'Silver-Ingot',
            'Aluminum-Ingot',
            'Lead-Ingot',
            'Zinc-Ingot',
            'Magnesium-Ingot',
            'Aluminum-Brass-Ingot',
            'Aluminum-Bronze-Ingot',
            'Billon-Ingot',
            'Brass-Ingot',
            'Bronze-Ingot',
            'Cobalt-Ingot',
            'Corinthian-Bronze-Ingot',
            'Damascus-Steel-Ingot',
            'Duralumin-Ingot',
            'Ferrosilicon',
            'Gilded-Iron',
            'Hardened-Metal',
            'Nickel-Ingot',
            'Redstone-Alloy-Ingot',
            'Reinforced-Alloy-Ingot',
            'Solder-Ingot',
            'Steel-Ingot',
          ],
        },
        'Synthetic-Sapphire',
        'Synthetic-Emerald',
        'Synthetic-Diamond',
        'Carbonado',
        'Carbon',
        'Magnesium-Salt',
        'Sulfate',
        'Silicon',
        'Bucket-of-Oil',
        'Bucket-of-Fuel',
        'Radiation',
        'Blistering-Ingot',
        'Uranium',
        'Neptunium',
        'Plutonium',
        'Boosted-Uranium',
        'Nether-Ice',
        'Enriched-Nether-Ice',
      ]
    },
    {
      type: 'category',
      label: '食物',
      link: {type: 'doc', id: 'Food'},
      className: 'hidden',
      items: [
        'Fortune-Cookie',
        'Diet-Cookie',
        'Meat-Jerky',
        'Kelp-Cookie',
        'Magic-Sugar',
        'Monster-Jerky',
        'Juices',
      ]
    },
    {
      type: 'category',
      label: '魔法物品',
      link: {type: 'doc', id: 'Magical-Items'},
      className: 'hidden',
      items: [
        'Lumps',
        'Broken-Spawner',
        'Ancient-Runes',
      ]
    },
  ],
  // auto generated sidebars
};

export default sidebars;
