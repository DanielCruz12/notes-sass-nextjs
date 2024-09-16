import HttpClient from "@/utils/httpClient";

const getEventService = async () => {
  return HttpClient(`/api/v1/events`).then((res) => {
    return res.data;
  });
};

const EventServices = {
  getEventService,
};

export default EventServices;
