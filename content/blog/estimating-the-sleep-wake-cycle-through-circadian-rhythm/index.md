---
slug: "estimating-the-sleep-wake-cycle-through-circadian-rhythm"
date: "2020-09-28"
title: "Estimating the Sleep-Wake Cycle Through Circadian Rhythm"
authorSlug: "miska-nurmi"
author: Perttu Lähteenlahti
tags: ["Sleep", "Engineering", "Circadian Rhythm"]
thumbnailBlog: "./sunset.jpeg"
---

The original motivation for this article was born when I started looking at whether evaluating sleep would be possible through easily applicable methods such as questionnaires, energy consumption, and heart rate of the user.

However, the sleep-wake cycle is a complicated process that is affected by multiple internal systems. The most important of these two processes are the circadian rhythm and the homeostatic increase in sleepiness (or “sleep pressure”). The homeostatic process is affected by the amount of sleep you got and when you previously slept. However, the sleep pressure is not enough to get you to go to sleep in time or to estimate when you are at the most alert during the day, this is where the circadian rhythm comes to play. Circadian rhythm seems to determine your level of alertness during the day but is strongly influenced by external factors, such as the amount of light. This alertness seems to be crucial, if we want to adjust our sleep accordingly, as factors such as getting too much blue light at night can offset your circadian rhythm, causing you to be alert when you want to sleep. Perhaps by estimating the circadian rhythm, we can evaluate when is the best time to stop watching a TV and close the curtains to keep the rhythm in check.

But therefore the question is, can circadian rhythm be estimated? What even is circadian rhythm? In this article, I’ll try to answer these questions and highlight some matters that relate to measuring and using circadian rhythm in your sleep and alertness evaluation.

### What Is the Circadian Rhythm?

The basis of the word "circadian" comes from words "circa" (meaning "around") and “dias” (meaning "day"), these reflect the fact that circadian rhythm is around 24 hours, often estimated to be a little longer than that. The circadian rhythm in mammals is adjusted by the Suprachiasmatic Nuclei in the brain. Besides affecting the sleep-wake cycle, the physiological process it is most often associated with, it also affects the body temperature, task performance, and adjusting melatonin levels. Like any rhythm, this circadian clock can be mostly determined by phase, amplitude, and period of the rhythm which creates the rhythmic pattern that can be observed from a graph visualizing the circadian rhythm. Estimation of a person's rhythm must therefore estimate these three factors.

The circadian rhythm is strongly related to certain cues that help it synchronize to the 24-hour sleep-wake cycle. This is called entertainment. The cues are referred to as “Zeitgebers” or time givers, which literally help the brain adjust to the internal clock. These Zeitgebers include such factors as general activity, sociality, meals, and most crucially, the amount of light and dark that you get. So the amount of light and dark can be crucial for your circadian clock to stay in sync! These are also important, because later on when I write about the actual measurement of the sleep-wake cycle through circadian rhythm, these cues also work as “masking factors”, which can mask the actual sleep-wake cycle.

The exact measurement of circadian rhythm is mostly done by evaluating the levels of melatonin (measured in dim light, hence often referred to as “dim light melatonin onset” or DLMO), core body temperature, and cortisol. These can be estimated through other means as well. For instance, the DLMO highly correlates with sleep midpoint. Unfortunately, this measurement is tarnished if your sleep cycle is influenced by such external factors as work or family commitments, as your sleep times cannot be fixed by such factors for reliable estimation.

It turns out, the circadian clock is especially influenced by the sleep homeostasis. This can be seen, for instance, when your sleep debt gets too high and you start to get dozy even though the sun is shining and it’s bright outside (things that would normally get you highly alert). A cup of coffee might feel like it’s giving you the boost, but it just doesn’t give you the same alertness as it normally would. However, your body still follows a circadian rhythm, and if you stay awake, your alertness levels will keep rising and falling according to it. Nevertheless, sleep debt makes it more difficult to estimate the true circadian cycle if not controlled for.

### Measuring and Estimating the Circadian Rhythm

Can we find out the true circadian rhythm? Yes. Is it difficult to do? Definitely! I consider this process to be a three-part problem:

1. Getting reliable measurements of the circadian rhythm.
2. Finding if there is a rhythm present in the measurement data.
3. Fitting the data to a cycle through parameter optimization.

To tackle the first point, we would in the optimal scenario measure the circadian rhythm by having the estimation subject stay up for an extended period to remove the effect that the sleep-wake cycle has on the circadian rhythm. Unfortunately, in practice, staying awake for at least 24 hours is not very practical and the equipment needed to do the exact measurements of the cycle are not easily available. Luckily, there are alternatives. Unfortunately, none of them can fully replace the exact measurements.

Measuring the current activity of the subject is widely used to estimate the circadian rhythm in animals, but as far as I’m aware, it hasn’t gained such status in human studies. On the other hand, questionnaires have been used to evaluate sleep chronotypes (which you can read more about in other Nyxo posts), but their role in estimations of circadian rhythm seems to be somewhat open. It would be interesting to see how active questionnaire usage such as filling the [Stanford Sleepiness Scale](https://web.stanford.edu/~dement/sss.html) every hour or so can capture the underlying circadian rhythm. Similarly, as mentioned above, the sleep midpoint can be in theory, estimated from sleep data, and then used to estimate the circadian rhythm. However, sleep debt or having an alarm clock break your sleep can cause the estimated midpoint to be at the wrong point. Furthermore, the unfortunate fact about these types of measurements is that they are subject to the earlier mentioned masking factors. The amount of light, how much coffee you drink and other such factors can cause the circadian rhythm to be masked or even to shift slightly. The problem is that all of these factors should be somehow controlled to get reliable measurements. This is especially important for questionnaires, where such factors as caffeine intake can affect alertness, making subjective data unreliable. Currently, there doesn’t seem to be an efficient way around these problems, but it could be that more research is needed to see if these masking factors consistently hide the circadian rhythm.

To solve the second problem, we must look at the collected data and find out if a rhythm exists. Multiple statistical methods can do just that, for instance, ANOVA or Fourier analysis should work just fine, but more varying methods can be tried in combination as well. This step can be both used to check if the test data is reliable and valid as if there is no cycle then there isn't a rhythm to be fit.

In the third step, in the case a cycle exists, we must then evaluate the parameters of that cycle. In practice, this means fitting the amplitude, acrophase, and period so that they fit the data in the long run. This can be done through cosinor or similar procedure and though fitting the data is not always easy, this is often not the part that causes problems. Though the cycle may be estimated incorrectly, that is often related to the measurement inaccuracies and isn't a problem of fitting to data.

Hopefully, by reading all of the above, you can see that getting reliable measurements of the circadian rhythm seems to be the biggest bottleneck for reliable and valid measurements of the true cycle. More research about the validity of the questionnaire and activity data when evaluating the rhythm is needed and until then, it is uncertain how well they work in the bigger picture.

### Conclusion

Above, I presented the evaluation of circadian rhythm as a three-part problem. It seems that above all, reliably measuring the circadian rhythm is the most difficult part if you want to find out your rhythm without staying awake for extended periods of time. However, there is some hope that new and better understood old methods could accommodate the shortcomings of the currently used measurement methods, that are either difficult to apply or unreliable in practice.

To get some idea about your own circadian rhythm, the stimulants (such as caffeine) and other external factors (such as the amount of light) should be held quite constant (amount of light) or minimized (stimulants, light late at night). Furthermore, you should wake up without an alarm clock. This way you can use your sleep midpoint to get some estimation of the circadian rhythm.

All in all, there doesn’t seem to be a silver bullet method to estimate your sleep cycles, but estimations based on your previous nights and the effect of external factors on your sleep are important aspects to understand. You can read more about the rhythms that make up your sleep and the factors affecting them in this blog and the Nyxo app!

### Sources

Burgess, H. J. (2010). Partial sleep deprivation reduces phase advances to light in humans. Journal of biological rhythms, 25(6), 460-468.

Refinetti, R., Cornélissen, G., & Halberg, F. (2007). Procedures for numerical analysis of circadian rhythms. Biological rhythm research, 38(4), 275-325.

Deboer, T. (2018). Sleep homeostasis and the circadian clock: Do the circadian pacemaker and the sleep homeostat influence each other’s functioning?. Neurobiology of sleep and circadian rhythms, 5, 68-77.

Hofstra, W. A., & de Weerd, A. W. (2008). How to assess circadian rhythm in humans: a review of literature. Epilepsy & Behavior, 13(3), 438-444.
