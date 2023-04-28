"use client";
import { FC } from "react";
import { ArrowUpRight } from "lucide-react";

import {
  Modal,
  ModalAction,
  ModalCancel,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "@/components/ui/Modal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface WhyModalProps {
  data: { what: string; why: String; lesson: string };
  title: string;
  demoUrl: string;
}

const WhyModal: FC<WhyModalProps> = ({ data, title, demoUrl }) => {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button
          variant="link"
          size="sm"
          className=" px-2 text-xs font-light tracking-wide  text-muted underline decoration-accent underline-offset-4"
        >
          Why I made it
        </Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle className="tracking-wide">{title}</ModalTitle>
        </ModalHeader>
        <ModalDescription>
          <DescText className="font-semibold tracking-wider text-foreground">
            What I Made
          </DescText>
          <DescText>{data.what}</DescText>
          <DescText className="font-semibold tracking-wider text-foreground">
            Why I Made It
          </DescText>
          <DescText>{data.why}</DescText>
          <DescText className="font-semibold tracking-wider text-foreground">
            What I Learnt
          </DescText>
          <DescText>{data.lesson}</DescText>
        </ModalDescription>
        <ModalFooter>
          <ModalCancel>Back</ModalCancel>
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col"
          >
            <Button className="flex items-center gap-1  sm:gap-2">
              Demo
              <ArrowUpRight className="inline-block h-3 w-3" />
            </Button>
          </a>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WhyModal;

function DescText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-2 text-sm font-normal leading-5 tracking-wide text-muted",
        className
      )}
    >
      {children}
    </div>
  );
}
