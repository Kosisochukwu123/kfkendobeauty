import React, { useState } from "react";
import "./Jobs.css";

/* ── Job listings data ─────────────────────────────────────────────
   These are the vacancies that appear when someone searches
   "salonname Beauty jobs" or "salonname Beauty vacancy" on Google.
   The page title and meta description handle the SEO side.
   ────────────────────────────────────────────────────────────────── */
const vacancies = [
  {
    id: 1,
    title: "Senior Hair Stylist",
    type: "Full Time",
    typeKey: "fulltime",
    desc: "We are looking for a passionate and experienced hair stylist to join our luxury team. You will handle cuts, colouring, blowouts and bespoke styling for our high-end clientele.",
    tags: ["Colouring", "Cutting", "Natural Hair", "Blowouts"],
    pay: "₦120,000 – ₦180,000 / month",
  },
  {
    id: 2,
    title: "Wig Technician & Installer",
    type: "Full Time",
    typeKey: "fulltime",
    desc: "Skilled wig specialist needed for lace front installations, custom wig making, and client consultations. Experience with human hair units is essential.",
    tags: ["Lace Front", "Full Lace", "Wig Making", "Hair Bonding"],
    pay: "₦100,000 – ₦160,000 / month",
  },
  {
    id: 3,
    title: "Nail Technician",
    type: "Full Time",
    typeKey: "fulltime",
    desc: "Creative nail artist required for manicures, pedicures, nail extensions, gel polish and intricate nail art. Must have a strong portfolio of previous work.",
    tags: ["Gel Nails", "Nail Art", "Extensions", "Pedicure"],
    pay: "₦80,000 – ₦120,000 / month",
  },
  {
    id: 4,
    title: "Master Barber",
    type: "Full Time",
    typeKey: "fulltime",
    desc: "Experienced barber sought for precision fades, beard shaping, hot towel shaves and men's grooming services. Must be able to work confidently with all hair textures.",
    tags: ["Fades", "Beard Trim", "Hot Towel Shave", "Lineups"],
    pay: "₦90,000 – ₦140,000 / month",
  },
  {
    id: 5,
    title: "Braiding & Plaiting Specialist",
    type: "Part Time",
    typeKey: "parttime",
    desc: "Talented braider needed for box braids, knotless braids, cornrows, twists and all protective styles. Weekend availability preferred.",
    tags: ["Box Braids", "Knotless", "Cornrows", "Twists"],
    pay: "₦60,000 – ₦90,000 / month",
  },
  {
    id: 6,
    title: "Spa & Skincare Therapist",
    type: "Part Time",
    typeKey: "parttime",
    desc: "Licensed aesthetician needed for facials, scalp treatments, deep conditioning and full relaxation spa packages. Customer care skills are essential.",
    tags: ["Facials", "Scalp Treatment", "Massage", "Skincare"],
    pay: "₦70,000 – ₦110,000 / month",
  },
  {
    id: 7,
    title: "Freelance Makeup Artist",
    type: "Freelance",
    typeKey: "freelance",
    desc: "We are looking for a skilled makeup artist available for bridal bookings, photoshoots and special events. Bring your own kit. Flexible schedule.",
    tags: ["Bridal", "Editorial", "Special FX", "Airbrush"],
    pay: "Per booking — negotiable",
  },
];

const typeClass = {
  fulltime: "vacancy-card__type--fulltime",
  parttime: "vacancy-card__type--parttime",
  freelance: "vacancy-card__type--freelance",
};

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  role: "",
  experience: "",
  about: "",
  cv: null,
};

const UploadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 15V3M12 3L8 7M12 3L16 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 15V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 12L10 17L19 8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Jobs() {
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const selectVacancy = (v) => {
    setSelected(v);
    setForm((prev) => ({ ...prev, role: v.title }));
    setSubmitted(false);
    setErrors({});
    // Scroll to form on mobile
    setTimeout(() => {
      document
        .getElementById("jobs-form")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) setForm((prev) => ({ ...prev, cv: file }));
  };

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim()) e.email = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.role.trim()) e.role = "Please select a vacancy above";
    if (!form.about.trim()) e.about = "Please tell us about yourself";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    // TODO: POST /api/jobs/apply once backend is approved
    setSubmitted(true);
  };

  return (
    <div className="page-enter">
      {/* ── Hero ── */}
      <div className="jobs-page__hero">
        {/* This text helps search engines find the page for job searches */}
        <p className="section-label section-label--center">Careers</p>
        <h1 className="jobs-page__hero-title">
          Join the <em>salonname</em> Family
        </h1>
        <div className="gold-line gold-line--center" aria-hidden="true" />
        <p className="jobs-page__hero-desc">
          We are always looking for talented, passionate beauty professionals to
          grow with us. Browse our current openings and apply below.
        </p>
        {/* Visible SEO text — helps Google surface this page for "salonname vacancy" searches */}
        <div className="jobs-page__seo-tag">
          Now Hiring · salonname Beauty · Uyo, Akwa Ibom · Nigeria
        </div>
      </div>

      {/* ── Body: vacancies + form ── */}
      <div className="jobs-page__body">
        {/* LEFT — vacancy listings */}
        <div>
          <p className="section-label">Current Openings</p>
          <h2 className="section-title">
            Open <em>Positions</em>
          </h2>
          <div className="section-divider" style={{ marginBottom: "2rem" }} />

          <div className="vacancies__list" role="list">
            {vacancies.map((v) => (
              <article
                key={v.id}
                className={`vacancy-card${selected?.id === v.id ? " selected" : ""}`}
                onClick={() => selectVacancy(v)}
                role="listitem"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && selectVacancy(v)}
                aria-label={`Apply for ${v.title}`}
              >
                <div className="vacancy-card__top">
                  <h3 className="vacancy-card__title">{v.title}</h3>
                  <span
                    className={`vacancy-card__type ${typeClass[v.typeKey]}`}
                  >
                    {v.type}
                  </span>
                </div>
                <p className="vacancy-card__desc">{v.desc}</p>
                <div className="vacancy-card__tags">
                  {v.tags.map((t) => (
                    <span className="vacancy-card__tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="vacancy-card__footer">
                  <span className="vacancy-card__pay">{v.pay}</span>
                  <span className="vacancy-card__apply-hint">
                    {selected?.id === v.id ? "✦ Selected" : "Click to apply →"}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* RIGHT — application form */}
        <div id="jobs-form">
          <p className="section-label">Apply Now</p>
          <h2 className="section-title">
            Send Your <em>Application</em>
          </h2>
          <div className="section-divider" style={{ marginBottom: "2rem" }} />

          <div className="jobs-form__wrap">
            {!selected && (
              <p className="jobs-form__hint">
                ← Select a vacancy on the left to begin your application
              </p>
            )}

            {selected && !submitted && (
              <>
                <div className="jobs-form__selected-role">
                  <div>
                    <div className="jobs-form__role-label">Applying for</div>
                    <div className="jobs-form__role-name">{selected.title}</div>
                  </div>
                </div>

                <form className="jobs-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-group__label" htmlFor="firstName">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="form-group__input"
                        placeholder="Your first name"
                        value={form.firstName}
                        onChange={handleChange}
                      />
                      {errors.firstName && (
                        <p className="jobs-form__error">{errors.firstName}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="form-group__label" htmlFor="lastName">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="form-group__input"
                        placeholder="Your last name"
                        value={form.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastName && (
                        <p className="jobs-form__error">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-group__label" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-group__input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="jobs-form__error">{errors.email}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-group__label" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-group__input"
                      placeholder="+234 xxx xxx xxxx"
                      value={form.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <p className="jobs-form__error">{errors.phone}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-group__label" htmlFor="experience">
                      Years of Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      className="form-group__select"
                      value={form.experience}
                      onChange={handleChange}
                    >
                      <option value="">Select range</option>
                      <option>Less than 1 year</option>
                      <option>1 – 2 years</option>
                      <option>3 – 5 years</option>
                      <option>6 – 10 years</option>
                      <option>10+ years</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-group__label" htmlFor="about">
                      Tell Us About Yourself & Your Skills *
                    </label>
                    <textarea
                      id="about"
                      name="about"
                      className="form-group__textarea"
                      placeholder="Describe your experience, skills, and why you want to join salonname Beauty..."
                      value={form.about}
                      onChange={handleChange}
                    />
                    {errors.about && (
                      <p className="jobs-form__error">{errors.about}</p>
                    )}
                  </div>

                  {/* CV Upload */}
                  <div className="form-group">
                    <label className="form-group__label">
                      CV / Portfolio (optional)
                    </label>
                    <label className="jobs-form__file-label" htmlFor="cv">
                      <UploadIcon />
                      <span>Upload CV or Portfolio</span>
                      <small>PDF, DOC, JPG — max 5MB</small>
                    </label>
                    <input
                      id="cv"
                      name="cv"
                      type="file"
                      className="jobs-form__file-input"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleFile}
                    />
                    {form.cv && (
                      <p className="jobs-form__file-name">✦ {form.cv.name}</p>
                    )}
                  </div>

                  <button type="submit" className="btn btn--primary btn--full">
                    Submit Application
                  </button>
                </form>
              </>
            )}

            {submitted && (
              <div className="jobs-form__success" role="alert">
                <div className="jobs-form__success-icon">
                  <CheckIcon />
                </div>
                <h4>Application Received!</h4>
                <p>
                  Thank you, {form.firstName}. We have received your application
                  for <strong>{selected?.title}</strong> and will be in touch
                  within 3–5 business days.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
