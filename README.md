# Work Day Scheduler

Week 5 of my Coding Bootcmap we created a Work Day Schedule for people who want to organize their day to day schedule to the hour!

I used bootstrap, Jquery, & moment.js to accomplish this!

![Daily Scheduler Website Image][screenshot]

[screenshot]: ./assets/images/Screen%20Shot%202022-07-21%20at%208.35.56%20AM.png "screenshot of Daily schedule"

---
# About this Website


## Time Blocks
---

* Right underneath the title of this website, there is a Date that displays the current day using moment.js

* You will also notice that each text-block is color coded to match past,present, and future hour!
> Gray block ⬜️: past / Red block 🟥: current / Green block 🟩: future


## Saving a Daily Task ✔️
---

* Saving a task is fairly simple. Using our Local Storage, we are able to set a task we want in a desired time block, when local storgae is set, item is then rendered from local storage so that even when refreshed it does not go away until you go back to clear it (manually)

    **How Does This Work?**

1. Choose a desired time block where you want to assign a task to and type out whatever task it is you want to complete

2. Next to that time block, you'll see a blue save file button that you can "click" and save information.

3. You know that your task was properly stored when a small "appointment added to local storage" text appears right above your time blocks!

4. When task has been completed, simply just erase the text and save **or** erase and create a new task for that choosen time block and save!

>When erasing or changing tasks inside of a time block be sure to click on the blue save file button each time so local storage is updated properly!

## Need to Organize Your Daily Schedule? 📝

[Organize your Daily Schedule by clicking on me!](https://lorena-rm.github.io/work-day-scheduler-jquery-lm/ "Lorena's Daily Scheduler")

