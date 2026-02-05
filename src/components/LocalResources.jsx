// src/components/LocalResources.jsx
export default function LocalResources() {
  const resources = [
    {
      category: 'Government & Services',
      icon: '🏛️',
      items: [
        { name: 'Lee County Government Center', location: 'Jonesville, VA', phone: '276-346-7763' },
        { name: 'Lee County Courthouse', location: 'Jonesville, VA', phone: '276-346-7714' },
        { name: 'Lee County Sheriff\'s Office', location: 'Jonesville, VA', phone: '276-346-7777' },
        { name: 'Lee County Clerk\'s Office', location: 'Jonesville, VA', phone: '276-346-7714' },
      ]
    },
    {
      category: 'Emergency Services',
      icon: '🚨',
      items: [
        { name: 'Emergency (Police/Fire/EMS)', phone: '911', urgent: true },
        { name: 'Lee County EMS', phone: '276-346-2911' },
        { name: 'Lee County Fire Department', phone: '276-346-1911' },
        { name: 'Non-Emergency Sheriff', phone: '276-346-7777' },
      ]
    },
    {
      category: 'Education',
      icon: '🎓',
      items: [
        { name: 'Lee County Public Schools', location: 'Jonesville, VA', phone: '276-346-1414' },
        { name: 'Lee High School', location: 'Jonesville, VA', phone: '276-346-2711' },
        { name: 'Jonesville Middle School', location: 'Jonesville, VA', phone: '276-346-9281' },
        { name: 'Jonesville Elementary School', location: 'Jonesville, VA', phone: '276-346-6491' },
      ]
    },
    {
      category: 'Healthcare',
      icon: '🏥',
      items: [
        { name: 'Lee County Community Hospital', location: 'Pennington Gap, VA', phone: '276-546-1300' },
        { name: 'Lee County Health Department', location: 'Jonesville, VA', phone: '276-346-2011' },
        { name: 'Lee County Medical Center', location: 'Pennington Gap, VA', phone: '276-546-1490' },
      ]
    },
    {
      category: 'Recreation & Parks',
      icon: '🌲',
      items: [
        { name: 'Wilderness Road State Park', location: 'Ewing, VA', phone: '276-445-3065' },
        { name: 'Cumberland Gap National Historical Park', location: 'Near Ewing, VA', phone: '606-248-2817' },
        { name: 'Lee County Recreation Department', phone: '276-346-7763' },
      ]
    },
    {
      category: 'Libraries',
      icon: '📚',
      items: [
        { name: 'Lee County Public Library', location: 'Jonesville, VA', phone: '276-346-2940' },
        { name: 'Pennington Gap Library', location: 'Pennington Gap, VA', phone: '276-546-2340' },
      ]
    },
    {
      category: 'Towns & Communities',
      icon: '🏘️',
      items: [
        { name: 'Town of Jonesville', location: 'County Seat', phone: '276-346-2444' },
        { name: 'Town of Pennington Gap', phone: '276-546-2425' },
        { name: 'Town of Rose Hill', phone: '276-445-3074' },
        { name: 'St. Charles', info: 'Unincorporated community' },
        { name: 'Ewing', info: 'Unincorporated community' },
      ]
    },
    {
      category: 'Utilities & Services',
      icon: '⚡',
      items: [
        { name: 'Powell Valley Electric Cooperative', phone: '276-445-2491' },
        { name: 'Lee County Water & Sewer', phone: '276-346-7763' },
        { name: 'Lee County Landfill', location: 'Jonesville, VA', phone: '276-346-1234' },
      ]
    },
    {
      category: 'Post Offices',
      icon: '📮',
      items: [
        { name: 'Jonesville Post Office', location: 'Jonesville, VA 24263', phone: '800-275-8777' },
        { name: 'Pennington Gap Post Office', location: 'Pennington Gap, VA 24277', phone: '800-275-8777' },
        { name: 'Rose Hill Post Office', location: 'Rose Hill, VA 24281', phone: '800-275-8777' },
      ]
    }
  ];

  return (
    <section id="resources" className="max-w-7xl mx-auto px-4 py-16" aria-labelledby="resources-heading">
      <div className="text-center mb-10">
        <h2 id="resources-heading" className="text-3xl font-semibold mb-3 text-primary">Local Resources Hub</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Essential services, facilities, and information for Lee County, Virginia residents and visitors
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((section) => (
          <div key={section.category} className="glass rounded-2xl border border-white/10 p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{section.icon}</span>
              <h3 className="text-xl font-semibold">{section.category}</h3>
            </div>
            
            <div className="space-y-3">
              {section.items.map((item, idx) => (
                <div key={idx} className="border-l-2 border-white/10 pl-4 py-2 hover:border-primary/40 transition">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="font-medium text-white">
                        {item.name}
                        {item.urgent && <span className="ml-2 text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded">URGENT</span>}
                      </p>
                      {item.location && <p className="text-sm text-white/60">{item.location}</p>}
                      {item.info && <p className="text-sm text-white/60">{item.info}</p>}
                    </div>
                    {item.phone && (
                      <span className="text-sm text-primary whitespace-nowrap">
                        {item.phone}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <div className="glass rounded-2xl border border-white/10 p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold mb-2">📍 About Lee County, Virginia</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Lee County is located in the far southwestern corner of Virginia, bordering Kentucky and Tennessee. 
            The county seat is Jonesville. With a rich history dating back to 1792, Lee County is known for its 
            beautiful mountain scenery, outdoor recreation opportunities, and strong sense of community. Major towns 
            include Jonesville, Pennington Gap, Rose Hill, St. Charles, and Ewing.
          </p>
        </div>
      </div>
    </section>
  );
}
