type MockEmail = {
    userName: string
    subject: string
    replyTo: string
    date: string
    message: string
  }
  
  export function generateMockEmails(count = 5): MockEmail[] {
    const names = [
      "Alice Smith",
      "Marcus Lee",
      "Jordan Patel",
      "Sofia Nguyen",
      "Daniel Thompson",
    ]
  
    const subjects = [
      "Project Update",
      "Quick Follow-Up",
      "Next Steps",
      "Feedback on the Report",
      "Meeting Recap",
    ]
  
    const bodies = [
      `Thank you for the update. I've reviewed everything and the progress looks solid.
  The team is clearly moving in the right direction, and I appreciate the effort.
  
  I have a few small notes that we can discuss during our next meeting.
  
  Best regards,`,
      `I wanted to follow up after our last conversation.
  Everything looks good on my end, but let me know if you need anything from me.
  
  Looking forward to the next steps.
  
  Thanks,`,
      `Great work on this so far. The details are well thought out and clearly presented.
  I’ve added a couple of comments
  
  Let’s sync soon to go over them.
  
  Best,`,
    ]
  
    return Array.from({ length: count }, () => {
      const userName = names[Math.floor(Math.random() * names.length)]
      const subject = subjects[Math.floor(Math.random() * subjects.length)]
      const body = bodies[Math.floor(Math.random() * bodies.length)]
  
      const emailHandle = userName.toLowerCase().replace(/\s+/g, "")
      const date = new Date(
        Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 30
      ).toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      })
  
      return {
        userName,
        subject,
        replyTo: `${emailHandle}@example.com`,
        date,
        message: `${body}\n\n${userName}`,
      }
    })
  }
  