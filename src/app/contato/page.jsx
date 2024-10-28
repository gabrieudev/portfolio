"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

// components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefone",
    description: "(79)99657-9700",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "gabrieudev@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Localidade",
    description: "Brasil, Aracaju-SE",
  },
];

const Contact = () => {
  const { toast } = useToast();

  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = process.env.NEXT_PUBLIC_CHAT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_CHAT_ID;

    const { firstname, lastname, email, phone, position, message } = formValues;
    if (!firstname || !lastname || !email || !phone || !position || !message) {
      toast({
        variant: "destructive",
        title: "Erro!",
        description: "Preencha todos os campos.",
      });
      return;
    }

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: `NOVO PEDIDO DE CONTATO!
        \nNome: ${formValues.firstname} ${formValues.lastname}
        \nEmail: ${formValues.email}
        \nTelefone: ${formValues.phone}
        \nServiço: ${formValues.position}
        \nMensagem: ${formValues.message}`,
      });
      toast({
        title: "Sucesso!",
        description:
          "Informações enviadas com successo, obrigado pelo interesse!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro!",
        description: "Infelizmente não foi possível realizar o envio.",
      });
      return;
    }
    setFormValues({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      position: "",
      message: "",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Vamos trabalhar juntos!</h3>
              <p className="text-white/60">
                Se você procura um profissional comprometido e apaixonado por
                tecnologia, entre em contato! Vamos juntos criar soluções
                inovadoras e transformar ideias em realidade.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Nome"
                  value={formValues.firstname}
                  onChange={(e) => handleChange("firstname", e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Sobrenome"
                  value={formValues.lastname}
                  onChange={(e) => handleChange("lastname", e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                <Input
                  type="tel"
                  placeholder="Telefone"
                  value={formValues.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>

              <Select
                onValueChange={(value) => handleChange("position", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Selecione uma opção</SelectLabel>
                    <SelectItem value="estagio">Estágio</SelectItem>
                    <SelectItem value="junior">Júnior</SelectItem>
                    <SelectItem value="freelancer">Freelancer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Digite sua mensagem aqui"
                className="h-[200px]"
                value={formValues.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />

              <Button type="submit" size="md" className="max-w-[200px]">
                Enviar mensagem
              </Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
