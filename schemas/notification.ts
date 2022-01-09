export default {
  name: 'notification',
  title: 'Notification',
  type: 'document',
  fields: [
    {
      name: 'message',
      title: 'message',
      type: 'string'
    },
    {
      name: 'type',
      title: 'type',
      type: 'string'
    },
    {
      name:"post",
      title:"post",
      type:"postedOn"
    },
    {
      name: 'from',
      title: 'from',
      type: 'notificationFrom'
    },
    {
      name: 'to',
      title: 'to',
      type: 'notificationTo'
    },
    {
      name:"viewed",
      title:"viewed",
      type:"boolean"
    }
  ]
}